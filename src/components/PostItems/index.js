import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { ScaleHeight, ScaleWidth } from '../../common/foundation';
import FastImage from 'react-native-fast-image'



const PostItems = ({
    imageProfile,
    name,
    createAt,
    imagePost,
    text,
    commentsLength,
    likesLength,
    onCommentPress,
    onLikePress,
    likeColor,
    isLike,
    onDeletePress,
    iconDelete,
    opentImage,
    style
}) => {

    const [numberLines, setNumberLines] = useState(3)

    const onSetNimberLines = () => {
        setNumberLines(numberLines == 3 ? 0 : 3)
    }
    return (
        <View style={[styles.container, style]}>
            <View style={styles.userHead}>

                <View style={styles.userView}>
                    <Image source={imageProfile} style={styles.image} />
                    <View style={styles.infoView}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.createAt}>{createAt}</Text>
                    </View>
                </View>
                {iconDelete ? (
                    <TouchableOpacity onPress={onDeletePress}>
                        <Feather
                            name='x'
                            size={ScaleWidth(18)}
                        />
                    </TouchableOpacity>
                ) : null}
            </View>
            <View>

                <View style={[styles.textView, {
                    maxWidth: numberLines == 3 ? ScaleWidth('71%') : ScaleWidth('100%'),
                    flexDirection: numberLines == 3 ? 'row' : null,
                }]}>
                    {/* add in this view maxWidth */}
                    <Text
                        numberOfLines={
                            numberLines
                                ? 3
                                : 0} style={styles.text}>
                        {text}
                    </Text>
                    {text.length >= 200 ? (
                        <TouchableOpacity
                            style={{
                                alignSelf: numberLines == 3 ? 'flex-end' : 'flex-start',
                                marginTop: numberLines == 3 ? 0 : ScaleHeight(7),

                            }}
                            onPress={onSetNimberLines}
                        >
                            <Text style={styles.textSee}>
                                {numberLines == 3 ? ' See more' : ' See less'}
                            </Text>
                        </TouchableOpacity>
                    ) : null}
                </View>

                <TouchableOpacity style={styles.imageView} onPress={opentImage}>

                    <FastImage
                        style={styles.imagePost}
                        source={{
                            uri: imagePost,
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.iconView}>
                <View style={styles.textIcon}>
                    <TouchableOpacity onPress={onCommentPress}>
                        <Ionicons
                            name='chatbox-outline'
                            size={ScaleWidth(21)}
                        />
                    </TouchableOpacity>
                    <Text style={styles.length}>{commentsLength}</Text>
                </View>
                <View style={styles.textIcon}>
                    <TouchableOpacity onPress={onLikePress}>
                        <Ionicons
                            name={isLike ? 'heart' : 'heart-outline'}
                            size={ScaleWidth(21)}
                            color={likeColor}
                        />
                    </TouchableOpacity>
                    <Text style={styles.length}>{likesLength}</Text>
                </View>
            </View>
        </View>
    )
}

export default PostItems;