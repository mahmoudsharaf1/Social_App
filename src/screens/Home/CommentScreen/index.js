import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import Empty from '../../../components/Empty'
import { useTranslation } from 'react-i18next'
import SendInput from '../../../components/SendInput'
import { useSelector } from 'react-redux'
import database from '@react-native-firebase/database';
import CommentsItem from '../../../components/CommentsItem'
import moment from 'moment'
import Header from '../../../components/Headers/Header'
import IMAGES from '../../../common/images'

const CommentScreen = ({ route, navigation }) => {
    const { t } = useTranslation();
    const [comments, setComments] = useState([])
    const [users, setUsers] = useState([])
    const [textComment, setTextComment] = useState('')
    const { user } = useSelector((state) => state.auth);
    const key = route.params.key;

    useEffect(() => {
        database().ref('users').on('child_added', snapshot => {
            const users = snapshot.val();
            setUsers(prevData => [...prevData, users]);
        });
        setTimeout(() => {
            database().ref(`posts/${key}/comments`).on('value', snapshot => {
                const data = snapshot.val();
                const comments = []
                data ? Object.values(data).forEach(post => {
                    comments.push(post)
                }) : null
                setComments(comments)
            });
        }, 1);
    }, [])

    const onComments = () => {

        const post = database().ref(`posts/${key}/comments`).push()
        post.set({
            comment: textComment,
            createAt: new Date(),
            from: user.uid,
            key: post.key
        }).then(res => {
            setTextComment('')
        })

    }

    const renderCommentsItems = ({ item }) => {
        const uid = item.from;
        const person = users.find(user => user.uid === uid);


        return (
            <CommentsItem
                name={person?.fullName}
                imageProfile={
                    person?.profilePic
                        ? { uri: `data:${person?.profilePic?.type};base64,${person?.profilePic?.base64}` }
                        : person?.gender == 'male'
                            ? IMAGES.male
                            : IMAGES.female
                }
                comment={item.comment}
                createAt={moment(item.createAt).fromNow('h:mm:ss a')}
            />
        )

    }


    return (
        <View style={styles.container}>
            {Platform.OS == 'ios' ? null : (
                <Header
                    onPress={() => navigation.goBack()}
                    title={t('home.Comments')}
                    iconName={'chevron-back-sharp'}
                />
            )}
            <FlatList
                data={comments.sort((x, y) => new Date(y.createAt) - new Date(x.createAt))}
                renderItem={renderCommentsItems}
                keyExtractor={(item, index) => JSON.stringify(index)}
                ListEmptyComponent={<Empty text={t('post.no_comments')} />}
            />
            <SendInput
                value={textComment}
                onChangeText={setTextComment}
                send={textComment ? true : false}
                onPress={onComments}
            />
        </View>
    )
}

export default CommentScreen

