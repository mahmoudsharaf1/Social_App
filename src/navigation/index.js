import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigation";

const RootNavigator = () => {
    const routeNameRef = useRef(null);
    const navigationRef = useRef(null);
    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                routeNameRef.current = navigationRef.current.getCurrentRoute().name;
            }}
        >
            <StackNavigator />
        </NavigationContainer>
    );
};

export default RootNavigator;
