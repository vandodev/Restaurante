import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import RestaurantsStack from './RestaurantsStack';
import FavoritesStack from './FavoritesStack';
import TopRestaurantesStack from './TopRestaurantesStack';
import SearchStack from './SearchStack';
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>

                <Tab.Screen
                    name="restaurantes"
                    component={RestaurantsStack}
                />

                <Tab.Screen
                    name="Favoritos"
                    component={FavoritesStack}
                />

                
                <Tab.Screen
                    name="top-Restaurantes"
                    component={TopRestaurantesStack}
                />

                <Tab.Screen
                    name="Procura"
                    component={SearchStack}
                />  

                <Tab.Screen
                    name="Account"
                    component={AccountStack}
                    options={{title:"Conta"}}
                />  

            </Tab.Navigator>
        </NavigationContainer>
    )
}
