import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles'
import { Colors, ScaleWidth } from '../../common/foundation';

const Empty = ({
    text
}) => {
    return (
        <View style={styles.container}>

            <Ionicons
                name='ios-chatbox-ellipses-outline'
                size={ScaleWidth(72)}
                color={Colors.gray}
                style={styles.icon}
            />
            <Text style={styles.text}>{text}</Text>

        </View>
    )
}

export default Empty

