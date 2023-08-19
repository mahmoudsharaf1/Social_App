import {
    ActivityIndicator,
    Alert,
    FlatList,
    Image,
    Platform,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { Colors, ScaleWidth } from '../../common/foundation';
import { useTranslation } from 'react-i18next';
import database from '@react-native-firebase/database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';
import Permissions from 'react-native-permissions';


import Header from '../../components/Headers/Header';
import Container from '../../components/Container';
import ImageViewItems from '../../components/ImageViewItems';
import { setUser } from '../../redux/slices/authSlice';
import IMAGES from '../../common/images';


const ProfileScreen = ({ navigation }) => {
    const [photoLibraryPermission, setPhotoLibraryPermission] = useState(null);
    const { t } = useTranslation()
    const [visible, setIsVisible] = useState(false);
    const [posts, setPosts] = useState([])
    const [image, setImage] = useState(null);
    const [emptyView, setEmptyView] = useState(true);
    const [postView, setPostView] = useState('');
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);




    const checkPermission = async () => {
        const cameraStatus = await Permissions.request(
            Platform.OS === 'android'
                ? 'android.permission.CAMERA'
                : 'ios.permission.CAMERA',
        );
        const photoLibraryStatus = await Permissions.request(
            Platform.OS === 'android'
                ? 'android.permission.READ_EXTERNAL_STORAGE'
                : 'ios.permission.PHOTO_LIBRARY',
        );
        await setPhotoLibraryPermission(photoLibraryStatus);

        const granted = photoLibraryStatus === 'granted'
            ? true
            : false;
        return granted;
    };


    useEffect(() => {
        database().ref('posts').on('value', snapshot => {
            const data = snapshot.val();
            const postss = []
            Object.values(data).forEach(post => {
                postss.push(post)
            })
            setPosts(postss)
        });
    }, [])



    const signOut = () => {
        auth().signOut()
            .then(() => {
                navigation.replace('Auth')
            })

    }

    const handleSignOut = () => {
        Alert.alert(
            'Logout',
            'Do you want to logout?',
            [
                { text: 'Ok', onPress: () => signOut() },
                { text: 'Cancel', onPress: () => console.log('cancled') }
            ]
        )
    };


    const imagePick = () => {
        if (checkPermission()) {
            const options = {
                mediaType: 'photo',
                includeBase64: true,
                quality: 0
            }
            launchImageLibrary(options).then(res => {
                setImage(res.assets[0]);
                dispatch(setUser({
                    email: user?.email,
                    profilePic: res?.assets[0],
                    fullName: user?.fullName,
                    uid: user?.uid,
                    gender: user?.gender,
                    type: user?.type,
                    legalStatus: user?.legalStatus
                }))
                database().ref(`users/${user.uid}`)
                    .update({ profilePic: res.assets[0] })
            })
        } else return;
    }


    const renderPostsItems = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => openImageView(item)} style={styles.postView}>
                {item.from == user?.uid ? (
                    <View>
                        {setEmptyView(false)}
                        <Image

                            style={styles.imagePost}
                            source={{ uri: `data:${item?.image?.type};base64,${item?.image?.base64}` }}
                        />
                    </View>
                ) : null}
            </TouchableOpacity>
        )
    }

    const openImageView = (item) => {
        setIsVisible(true)
        setPostView(item)
    }



    return (
        <Container >
            <Header
                iconName={'log-out-outline'}
                title={t('post.account')}
                onPress={handleSignOut}
            />


            <View style={styles.body}>
                <View style={styles.userData}>
                    <View style={styles.imageView}>
                        <Image
                            source=
                            {
                                user.profilePic
                                    ? { uri: `data:${user?.profilePic?.type};base64,${user?.profilePic?.base64}` }
                                    : user.gender == 'male'
                                        ? IMAGES.male
                                        : IMAGES.female
                            }
                            style={styles.image}
                        />
                        <TouchableOpacity onPress={imagePick} style={styles.cameraView}>
                            <Ionicons
                                name='pencil'
                                size={ScaleWidth(15)}

                                color={Colors.success}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.name}>{user?.fullName}</Text>
                </View>



                <FlatList
                    data={posts.sort((x, y) => new Date(y.createAt) - new Date(x.createAt))}
                    renderItem={renderPostsItems}
                    keyExtractor={(item, index) => JSON.stringify(index)}
                    style={styles.flatList}

                />

                {emptyView == true ? (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddPost')}
                        style={styles.emptyView}
                    >
                        <Image
                            source={IMAGES.empty_post}
                            style={styles.addWall}
                        />
                        <View style={styles.textEmptyView}>
                            <Text style={styles.textEmpty}>{`Make your first post`}</Text>
                        </View>
                    </TouchableOpacity>
                ) : null}


                <ImageViewItems
                    imageView={postView.image}
                    textPost={postView.textPost}
                    visible={visible}
                    onRequestClose={() => setIsVisible(false)}
                />

            </View>
        </Container>
    )
}

export default ProfileScreen;