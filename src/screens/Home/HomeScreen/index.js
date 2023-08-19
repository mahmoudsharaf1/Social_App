import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';
import { useSelector } from 'react-redux';

import styles from './styles';
import PostItems from '../../../components/PostItems';
import { Colors, ScaleWidth } from '../../../common/foundation';
import { useTranslation } from 'react-i18next';
import ImageViewItems from '../../../components/ImageViewItems';
import IMAGES from '../../../common/images';





const HomeScreen = ({ navigation }) => {
    const { t } = useTranslation();
    const [visible, setIsVisible] = useState(false);
    const [postView, setPostView] = useState('');
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        database().ref('users').on('child_added', snapshot => {
            const users = snapshot.val();

            setUsers(prevData => [...prevData, users]);
        });
        database().ref('posts').on('value', snapshot => {
            const data = snapshot.val();
            const postss = []
            Object.values(data).forEach(post => {
                postss.push(post)
            })
            setPosts(postss)
        });


    }, [])


    const onSetLike = (key) => {
        database().ref(`posts/${key}/likes`)
            .child(user.uid)
            .set({ like: true })
    }
    const onDisLike = (key) => {
        database().ref(`posts/${key}/likes`)
            .child(user.uid)
            .set(null)
    }

    const onDeletePost = (key) => {
        database().ref(`posts/${key}`).remove();
    }

    const handleDelete = (key) => {
        Alert.alert(
            'Logout',
            'Do you want to logout?',
            [
                { text: 'Ok', onPress: () => onDeletePost(key) },
                { text: 'Cancle', onPress: () => console.log('cancled') }
            ]
        )
    };

    const renderPostsItems = ({ item, index }) => {

        const uid = item.from;
        const userData = users.find(user => user.uid === uid);
        const like = item.likes

        const likeId =
            item.likes ? Object.keys(like).find(id => id == user?.uid) : null

        const comment = item.comments
        const comments = []
        item.comments ? Object.values(comment).forEach(comment => {
            comments.push(comment)
        }) : null
        const likes = []
        item.likes ? Object.values(like).forEach(like => {
            likes.push(like)
        }) : null

        const admin = user?.type == 'admin' ? true : false;



        return (
            <PostItems
                style={{ borderTopWidth: index == 0 ? 0 : ScaleWidth(1) }}
                opentImage={() => openImageView(item)}
                name={userData?.fullName}
                createAt={moment(item?.createAt).fromNow('h:mm:ss a')}
                imageProfile={
                    userData?.profilePic
                        ? { uri: `data:${userData?.profilePic?.type};base64,${userData?.profilePic?.base64}` }
                        : userData?.gender == 'male'
                            ? IMAGES.male
                            : IMAGES.female
                }

                imagePost={`data:${item?.image?.type};base64,${item?.image?.base64}`}
                text={item.textPost}
                commentsLength={item?.comments ? comments?.length : 0}
                likesLength={item?.likes ? likes?.length : 0}
                isLike={likeId == user?.uid ? true : false}
                likeColor={likeId == user?.uid ? 'red' : 'black'}
                onLikePress={() => likeId == user.uid ? onDisLike(item.key) : onSetLike(item.key)}
                onCommentPress={() => navigation.navigate('CommentScreen', { comments: comment, key: item.key })}
                iconDelete={user?.uid == item?.from || user?.type == 'admin' ? true : false}
                onDeletePress={() => handleDelete(item.key)}

            />
        )
    }


    const openImageView = (item) => {
        setIsVisible(true)
        setPostView(item)
    }
    return (
        <View style={styles.container}>
            <ImageViewItems
                imageView={postView.image}
                textPost={postView.textPost}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}
            />




            <View style={styles.body}>
                <View style={styles.headerView}>
                    <Text style={styles.title}>{t('home.News')}</Text>
                    <Ionicons
                        name='md-chatbubble-outline'
                        size={ScaleWidth(21)}
                    />
                </View>



                <FlatList
                    data={posts.sort((x, y) => new Date(y.createAt) - new Date(x.createAt))}
                    renderItem={renderPostsItems}
                    keyExtractor={(item, index) => JSON.stringify(index)}
                    ListEmptyComponent={
                        <ActivityIndicator
                            color={Colors.black}
                            size={'small'}
                            style={styles.loader}
                        />

                    }
                />
            </View>

        </View>
    )
}

export default HomeScreen;