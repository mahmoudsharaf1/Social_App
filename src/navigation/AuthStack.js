import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";


const Stack = createNativeStackNavigator();



const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >

            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

        </Stack.Navigator>
    );
};

export default AuthStack;
