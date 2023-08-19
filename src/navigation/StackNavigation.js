import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigator from "./BottomTabsNavigation";
import SplashScreen from "../screens/Auth/SplashScreen";
import CommentScreen from "../screens/Home/CommentScreen";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";
import BlockedScreen from "../screens/BlockedScreen";
const Stack = createNativeStackNavigator();



const StackNavigator = () => {
    const { user } = useSelector((state) => state.auth);


    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="SplashScreen"
        >
            {/* {user?.legalStatus != 'block' ? (
                <> */}
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Auth" component={AuthStack} />
            <Stack.Screen name="App" component={BottomTabNavigator} />
            <Stack.Screen
                name="CommentScreen"
                component={CommentScreen}
                options={{ presentation: 'modal' }}
            />
            {/* </>
            ) : (
                <Stack.Screen name="BlockedScreen" component={BlockedScreen} />

            )} */}
        </Stack.Navigator>
    );

};

export default StackNavigator;
