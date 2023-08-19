import { View, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Colors } from '../../common/foundation';

const Container = ({ children, style, container }) => {
    return (
        <SafeAreaView style={[styles.container, container]}>
            <StatusBar translucent={false} hidden={false} backgroundColor={Colors.white} barStyle={"dark-content"} animated showHideTransition="fade" />
            <View style={[styles.container, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
};

export default Container;
