import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import IMAGES from '../../../common/images';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../../redux/auth';


const SplashScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);


    useEffect(() => {
        auth().signOut();

        auth().onAuthStateChanged(userAuth =>
            navigation.replace(userAuth == null ? 'Auth' : 'App'))

    }, [])


    return (
        <View style={styles.container}>
            <Animatable.View useNativeDriver={true} animation={'fadeInUpBig'}>
                <Image
                    source={IMAGES.map}
                    style={styles.image}
                />
                <Text style={styles.text}>Light Sky</Text>
            </Animatable.View>
        </View>
    )
}

export default SplashScreen;