import React from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import styles from "./styles";
// import {useTranslation} from 'react-i18next';
import IMAGES from "../../common/images";
import { Colors, ScaleWidth } from "../../common/foundation";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SearchInput = ({
  placeholder,
  value,
  onChangeText,
  returnKeyType,
  onSubmitEditing,
  mainStyle,
  inputStyle,
  keyboardType,
  onPress,
  editable,
  sliders,
  filterOnPress

}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.mainContainer,
        inputStyle,
        value ? { borderColor: Colors.primary } : null,
      ]}
    >
      <AntDesign
        name={"search1"}
        size={ScaleWidth(17)}
        color={Colors.darkBlue}
      />
      {!editable ?
        <Text
          style={styles.placeholder}

        >{placeholder}</Text>
        : <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={Colors.placeHolder}
          value={value}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          editable={editable}
        />}
      {sliders ? (
        <TouchableOpacity
          onPress={filterOnPress}>
          <FontAwesome
            name={"sliders"}
            size={ScaleWidth(17)}
            color={Colors.darkBlue}
          />
        </TouchableOpacity>

      ) : null}

    </TouchableOpacity>
  );
};

export default SearchInput;
