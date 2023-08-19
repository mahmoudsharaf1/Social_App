import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenContainer from '../../components/ScreenContainer';
import styles from './styles';
import IMAGES from '../../common/images';

const BlockedScreen = ({

}) => {
    return (
        <ScreenContainer style={styles.container}>
            <Image
                source={IMAGES.block}
                style={styles.image}
            />
            <Text style={styles.text}>{`You're blocked`}</Text>
            <Text style={styles.subText}>{`you can't use this app `}</Text>

        </ScreenContainer>
    )
}

export default BlockedScreen;