import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import AuthHeader from '../../../components/Headers/AuthHeader'
import { useTranslation } from 'react-i18next'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Input from '../../../components/Input'
import AppButton from '../../../components/AppButton'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, signOut } from '../../../redux/auth'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors, ScaleWidth } from '../../../common/foundation'


const SignUpScreen = ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [IsSecure, setIsSecure] = useState(true);
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const [textError, setTextError] = useState(null);
    const { user, isLoading, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user != null) {
            navigation.navigate('App')
        }
    }, [user])



    const onCheckMaleGender = () => {
        setMale(true)
        setFemale(false)
    }
    const onCheckFemaleGender = () => {
        setMale(false)
        setFemale(true)
    }




    const validateForm = () => {
        let lowercase = password.match("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}");

        let emailRegex = email?.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        let errors = [];

        if (fullName.split(' ')[0] === '') {
            errors.push(t('Please enter the Full Name'));
        }
        if (fullName.length < 6) {
            errors.push(t('The Full name must contain more than 6 letters'));
        }
        if (email && emailRegex === null) {
            errors.push(t('Invalid email'));
        }
        if (email === '') {
            errors.push(t('Please enter the email'));
        }
        if (password === '') {
            errors.push(t('Please enter the password'));
        }
        if (confirmPassword !== password) {
            errors.push(t("Password confirmation doesn't match"));
        }
        if (male == false && female == false) {
            errors.push(t("Please choose your gender"));
        }
        if (lowercase === null) {
            errors.push(t('Must contain at least one number and one uppercase and lowercase letter, and at least 7 or more characters'));
        }
        if (errors.length > 0) {
            setTextError(errors[0]);
            return false;
        } else {
            return true;
        }
    }

    const handleSignUp = () => {
        const gender = male == true ? 'male' : 'female';

        if (validateForm()) {

            dispatch(createUser(
                email,
                password,
                fullName,
                gender
            ));
            if (error?.code === "auth/email-already-in-use") {
                setTextError(t('Email already in use'))
            }
            if (error?.code === 'auth/invalid-email') {
                setTextError(t('That email address is invalid!'));
            }
        }
    };





    return (
        <View style={styles.container}>
            <AuthHeader
                backArrow
                navigation={navigation}
                title={t('auth.Create New Account')}
            />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <Input
                    value={fullName}
                    mainStyle={styles.name}
                    placeholder={t("auth.fullName")}
                    title={t("auth.fullName")}
                    keyboardType='email-address'
                    onChangeText={setFullName}
                />
                <Input
                    value={email}
                    mainStyle={styles.name}
                    placeholder={t("auth.yourEmail")}
                    title={t("auth.email")}
                    keyboardType='email-address'
                    onChangeText={setEmail}
                />
                <Input
                    value={password}
                    isPassword={true}
                    setPassword
                    secureTextEntry={IsSecure}
                    isPasswordOnPress={() => setIsSecure(!IsSecure)}
                    mainStyle={styles.email}
                    placeholder={t("auth.password")}
                    title={t("auth.password")}
                    onChangeText={setPassword}
                />
                <Input
                    value={confirmPassword}
                    isPassword={true}
                    setPassword
                    secureTextEntry={IsSecure}
                    isPasswordOnPress={() => setIsSecure(!IsSecure)}
                    mainStyle={styles.email}
                    placeholder={t("auth.confirmpassword")}
                    title={t("auth.confirmpassword")}
                    onChangeText={setConfirmPassword}
                />
                <View style={styles.genderContainer}>

                    <TouchableOpacity onPress={onCheckMaleGender} style={styles.genderView}>
                        <Text style={styles.gender} >{'Male'}</Text>
                        <Ionicons
                            name={male ? 'checkmark-circle' : 'ellipse-outline'}
                            size={ScaleWidth(19)}
                            color={Colors.success}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onCheckFemaleGender} style={styles.genderView}>
                        <Text style={styles.gender}>{'Female'}</Text>
                        <Ionicons
                            name={female ? 'checkmark-circle' : 'ellipse-outline'}
                            size={ScaleWidth(19)}
                            color={Colors.success}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.error}>{textError}</Text>
                <AppButton
                    style={styles.button}
                    title={t("auth.signup")}
                    onPress={handleSignUp}
                    loading={isLoading}
                />
                <View style={styles.textView}>
                    <Text style={styles.text}>{t('auth.alreadyHaveAccount')}</Text>
                    <Text onPress={() => navigation.navigate('Login')} style={styles.signup}> {t('auth.signin')}</Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default SignUpScreen;

