import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'

const CommentsItem = ({
    imageProfile,
    name,
    comment,
    createAt
}) => {
    return (
        <View style={styles.container}>

            <View style={styles.userView}>
                <Image source={imageProfile} style={styles.image} />
                <View style={styles.infoView}>
                    <Text style={styles.name}>{name}</Text>
                </View>
                <Text style={styles.createAt}>{createAt}</Text>
            </View>
            <View style={styles.textView}>
                <Text style={styles.comment}>{comment}</Text>
            </View>
        </View>
    )
}

export default CommentsItem

