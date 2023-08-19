import React from "react";
import { Text, SafeAreaView, I18nManager, TouchableOpacity, Image } from "react-native";
import { Colors, ScaleWidth } from "../../../common/foundation";
import styles from "./styles";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import IMAGES from "../../../common/images";

const AuthHeader = ({
  navigation,
  title,
  style,
  logo,
  backArrow
}) => {

  const onPress = () => {
    navigation.goBack()
  }
  return (
    <SafeAreaView
      style={[styles.container, style]}
    >
      {backArrow ? (

        <TouchableOpacity style={styles.backButton} onPress={onPress}>
          <EvilIcons
            name={I18nManager.isRTL ? 'chevron-right' : 'chevron-left'}
            size={ScaleWidth(33)}
            color={Colors.black}
          />
        </TouchableOpacity>
      ) : null}
      {logo ? (
        <Image style={styles.logo} source={IMAGES.logo} />
      ) : null}
      <Text style={styles.txt}>
        {title}
      </Text>


    </SafeAreaView>
  );
};

export default AuthHeader;
