import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScaleWidth } from '../../../common/foundation';
import styles from './styles';

const Header = ({
    title,
    iconName,
    onPress
}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name={iconName} size={ScaleWidth(18)} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.rightView} />
        </View>
    )
}

export default Header