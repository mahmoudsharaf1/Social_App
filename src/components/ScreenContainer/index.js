import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { styles } from './styles';



const ScreenContainer = ({
    children,
    style,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.container, styles.whiteBackground, style]}>{children}</View>
        </SafeAreaView>
    );
};

export default ScreenContainer;
