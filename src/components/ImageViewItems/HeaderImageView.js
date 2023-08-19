import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';


import styles from './styles';
import { Colors, ScaleWidth } from '../../common/foundation';

const HeaderImageView = ({
    onPress,
    animation,
    duration
}) => {
    return (
        <Animatable.View duration={duration} animation={animation} style={styles.headerContainer}>
            <TouchableOpacity style={styles.iconView} onPress={onPress} >
                <AntDesign
                    name={'close'}
                    size={ScaleWidth(18)}
                    color={Colors.white}
                />
            </TouchableOpacity>
        </Animatable.View>
    )
}

export default HeaderImageView;