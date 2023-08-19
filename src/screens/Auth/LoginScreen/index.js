import { Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import styles from './styles'
import { useTranslation } from 'react-i18next';
import AuthHeader from '../../../components/Headers/AuthHeader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Input from '../../../components/Input';
import AppButton from '../../../components/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, signOut } from '../../../redux/auth';


const reducer = (state, key, value) => {
    return { ...state, [key]: value };
};

const LoginScreen = ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [textError, setTextError] = useState(null);
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const { user, isLoading, error } = useSelector((state) => state.auth);





    const handleLogin = () => {
        dispatch(loginUser(email, password))
        if (error?.code === "auth/invalid-email") {
            setTextError(t('Invalid email'))
        }
        if (error?.code === 'auth/wrong-password') {
            setTextError(t('Wrong password'));
        }
        if (error?.code === 'auth/user-not-found') {
            setTextError(t('User not found'));
        }
    };




    return (
        <View style={styles.container}>
            <AuthHeader logo navigation={navigation} title={t("auth.Log In to make your memories")} />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <Input
                    value={email}
                    mainStyle={styles.name}
                    placeholder={t("auth.yourEmail")}
                    title={t("auth.email")}
                    // error={form?.emailError}
                    keyboardType='email-address'
                    onChangeText={setEmail}
                />
                <Input
                    value={password}
                    isPassword={true}
                    isPasswordOnPress={() => setSecureTextEntry(!secureTextEntry)}
                    mainStyle={styles.email}
                    placeholder={t("auth.password")}
                    title={t("auth.password")}
                    secureTextEntry={secureTextEntry}
                    onChangeText={setPassword}
                />
                <Text style={styles.error}>{textError}</Text>
                <AppButton
                    style={styles.button}
                    title={t("auth.login")}
                    onPress={handleLogin}
                    loading={isLoading}
                />
                <View style={styles.textView}>
                    <Text style={styles.text}>{t('auth.have_account')}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                        <Text style={styles.signup}> {t('auth.signup')}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default LoginScreen

