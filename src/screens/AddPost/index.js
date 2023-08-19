import { Image, Platform, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenContainer from '../../components/ScreenContainer';
import { t } from 'i18next';
import { launchImageLibrary } from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign'

import styles from './styles';
import AppButton from '../../components/AppButton';
import Input from '../../components/Input';
import { Colors, ScaleWidth } from '../../common/foundation';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../redux/setPost';


const AddPost = ({ navigation }) => {
    const [photoLibraryPermission, setPhotoLibraryPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [textInput, setTextInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { user } = useSelector((state) => state.auth);


    const dispatch = useDispatch();

    useEffect(() => {
        checkPermission();
    }, []);

    const checkPermission = async () => {
        const photoLibraryStatus = await Permissions.request(
            Platform.OS == 'android'
                ? 'android.permission.READ_EXTERNAL_STORAGE'
                : 'ios.permission.PHOTO_LIBRARY',
        );
        // await setCameraPermission(cameraStatus);
        await setPhotoLibraryPermission(photoLibraryStatus);
    };


    const imagePick = () => {
        if (photoLibraryPermission !== 'granted') {
            checkPermission();
        }
        const options = {
            mediaType: 'photo',
            includeBase64: true,
            quality: 1
        }
        launchImageLibrary(options).then(res => {
            setImage(res.assets[0]);
        })
    }


    const handleSetPosts = () => {
        const createAt = new Date();
        const data = {
            image: image,
            textPost: textInput,
            from: user.uid,
            createAt: createAt.toString()
        }
        dispatch(setPosts(data))
        setIsLoading(true)
        setTimeout(() => {
            setImage('')
            setTextInput('')
            setIsLoading(false)
            navigation.navigate('Home')
        }, 1000);
    }

    return (
        <ScreenContainer>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>{t('post.cancle')}</Text>
                </TouchableOpacity>
                <AppButton
                    onPress={handleSetPosts}
                    disabled={image == null || textInput == '' ? true : false}
                    style={styles.postButton}
                    textStyle={styles.post}
                    title={t('post.post')}
                    loading={isLoading}
                />
            </View>
            <Input
                value={textInput}
                onChangeText={setTextInput}
                placeholder={t('post.write')}
                multiline={true}
                inputStyle={styles.inputStyle}
            />
            <Image
                resizeMode='stretch'
                source={image == null ? null : { uri: `data:${image.type};base64,${image.base64}` }}
                style={styles.image}
            />
            <TouchableOpacity onPress={() => imagePick()} style={styles.pictureButton}>
                <AntDesign
                    name='picture'
                    size={ScaleWidth(20)}
                    color={Colors.blue}
                />
                <Text style={styles.photoText}>{t('post.photo')}</Text>
            </TouchableOpacity>
        </ScreenContainer>
    )
}

export default AddPost;