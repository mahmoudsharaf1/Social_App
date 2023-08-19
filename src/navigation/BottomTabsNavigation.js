import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { useTranslation } from "react-i18next";
import { Colors, ScaleHeight, Typography } from "../common/foundation";
import AntDesign from "react-native-vector-icons/AntDesign";
import HomeScreen from "../screens/Home/HomeScreen";
import AddPost from "../screens/AddPost";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
    const { t } = useTranslation();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            backBehavior="history"
            screenOptions={{
                tabBarStyle: styles.tapStyles,
                tabBarHideOnKeyboard: true,
                tabBarItemStyle: {
                    height: ScaleHeight(60)
                }

            }}


        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={() => options(t("bottomTabs.home"), "home", t, null)}
            />
            <Tab.Screen
                name="AddPost"
                component={AddPost}
                options={() => options(t("bottomTabs.home"), "pluscircle", t, null)}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={() => options(t("bottomTabs.home"), "user", t, null)}
            />

        </Tab.Navigator>
    );
};

export default BottomTabsNavigator;

const options = (name, icon, t, cart_items) => ({
    headerShown: false,

    tabBarLabel: ({
        focused,
        color,
        size
    }) => {
    },
    tabBarIcon: ({
        focused,
        color,
        size
    }) => {
        if (name == t("bottomTabs.cart")) {
            return (
                <View>
                    <AntDesign
                        name={icon}
                        size={ScaleHeight(22)}
                        color={focused ? Colors.black : Colors.gray}
                    />

                    {cart_items?.length > 0 && (
                        <View style={styles.numOfCartItems}>
                            <Text style={styles.numOfCartItemsText}>
                                {cart_items?.length > 99 ? "+99" : cart_items?.length}
                            </Text>
                        </View>
                    )}
                </View>
            );
        } else {
            return (
                <AntDesign
                    name={icon}
                    size={ScaleHeight(22)}
                    color={focused ? Colors.blue : Colors.gray}
                />
            );
        }
    }, tabBarStyle: {
        height: ScaleHeight(70),
        justifyContent: 'center',
        alignItems: 'center',
        display:
            name == t('bottomTabs.cart')
                ? 'none'
                : null,
        borderTopLeftRadius: ScaleHeight(15),
        borderTopRightRadius: ScaleHeight(15),
        shadowColor: Colors.gray,
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 1.32,
        shadowRadius: 5.46,
        elevation: 9,

    },
    // to hide tab bar in cart screen
});
