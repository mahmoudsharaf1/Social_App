import { Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ImageView from "react-native-image-viewing";
import * as Animatable from 'react-native-animatable';
import ImageViewer from 'react-native-image-zoom-viewer';

import styles from './styles';
import GeneralModal from '../GeneralModal';
import HeaderImageView from './HeaderImageView';
import { ScaleHeight, ScaleWidth } from '../../common/foundation';



const ImageViewItems = ({
    visible,
    onRequestClose,
    imageView,
    textPost
}) => {
    const [saveToLocal, setSaveToLocal] = useState(true)
    const [numberLines, setNumberLines] = useState(3)
    const [moveView, setMoveView] = useState(false)

    const onSetNimberLines = () => {
        setNumberLines(numberLines == 3 ? 0 : 3)
    }

    const onMoveViews = () => {
        setMoveView(!moveView)
    }

    return (
        <GeneralModal
            visible={visible}
            onRequestClose={onRequestClose}
        >

            <HeaderImageView
                animation={moveView ? 'fadeOutUp' : 'fadeInDown'}
                duration={moveView ? 1000 : 100}

                onPress={onRequestClose}
            />


            <View style={styles.imageViewer}>

                <ImageViewer
                    onCancel={onRequestClose}
                    enableSwipeDown={true}
                    useNativeDriver={true}
                    saveToLocalByLongPress={true}
                    onClick={onMoveViews}
                    imageUrls={[{ url: `data:${imageView?.type};base64,${imageView?.base64}` }]}
                    renderIndicator={() => null}

                />
            </View>

            <Animatable.View
                animation={moveView ? 'fadeOutDown' : 'fadeInUp'}
                duration={moveView ? 1000 : 10}
            >
                <ScrollView style={[styles.textPostView, {
                    maxHeight: numberLines == 3 ? ScaleHeight('25%') : ScaleHeight('45%'),
                }]}>
                    <Text
                        numberOfLines={numberLines}
                        style={styles.text}>{textPost}</Text>

                    {textPost?.length >= 200 ? (
                        <TouchableOpacity
                            style={styles.seeMoreText}
                            onPress={onSetNimberLines}
                        >
                            <Text style={styles.textSee}>
                                {numberLines == 3 ? ' See more' : ' See less'}
                            </Text>
                        </TouchableOpacity>
                    ) : null}
                </ScrollView>
            </Animatable.View>

        </GeneralModal>


    )
}

export default ImageViewItems