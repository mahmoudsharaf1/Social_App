import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { useTranslation } from 'react-i18next'

const SendInput = ({
    onPress,
    send,
    onChangeText,
    value
}) => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={t('post.write_comment')}
                    onChangeText={onChangeText}
                    value={value}
                    style={styles.input}
                />
                {send ? (
                    <TouchableOpacity onPress={onPress}>
                        <Text style={styles.send}>{t('post.send')}</Text>
                    </TouchableOpacity>
                ) : null}
            </View>
        </View>
    )
}

export default SendInput

