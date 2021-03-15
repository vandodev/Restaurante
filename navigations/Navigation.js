import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';


import RestaurantsStack from './RestaurantsStack';
import FavoritesStack from './FavoritesStack';
import TopRestaurantesStack from './TopRestaurantesStack';
import SearchStack from './SearchStack';
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator();

export default function Navigation() {

    const screenOptions = (route, color) => {
        let iconName
        switch (route.name) {
            case "restaurants":
                iconName = "compass-outline"
                break;
            case "favorites":
                iconName = "heart-outline"
                break;
            case "top-restaurants":
                iconName = "star-outline"
                break;
            case "search":
                iconName = "magnify"
                break;
            case "account":
                iconName = "home-outline"
                break;

            default:
                break;
        }

        return (
            <Icon
                type="material-community"
                name={iconName}
                size={30}
                color={color}
            />
        )
    }

    return (
        <NavigationContainer>
                <Tab.Navigator
                initialRouteName="restaurants"
                tabBarOptions={{
                    inactiveTintColor: "#000000",
                    activeTintColor: "#ed4322"
                }}
                 screenOptions={({ route }) => ({
                tabBarIcon: ( { color } ) => screenOptions(route, color)
                 })}
                >

                <Tab.Screen
                    name="restaurants"
                    component={RestaurantsStack}
                />

                <Tab.Screen
                    name="favorites"
                    component={FavoritesStack}
                />

                
                <Tab.Screen
                    name="top-restaurants"
                    component={TopRestaurantesStack}
                />

                <Tab.Screen
                    name="search"
                    component={SearchStack}
                />  

                <Tab.Screen
                    name="account"
                    component={AccountStack}
                />  

            </Tab.Navigator>
        </NavigationContainer>
    )
}
