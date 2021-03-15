import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Restaurants from '../screens/Restaurants';
import Favorites from '../screens/Favorites';
import TopRestaurants from '../screens/TopRestaurants';
import Search from '../screens/Search';
import Account from '../screens/Account';



const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>

                <Tab.Screen
                    name="restaurantes"
                    component={Restaurants}
                    options={{title:"Restaurantes"}}
                />

                <Tab.Screen
                    name="Favoritos"
                    component={Favorites}
                    options={{title:"Favoritos"}}
                />

                
                <Tab.Screen
                    name="top-Restaurantes"
                    component={TopRestaurants}
                    options={{title:"Top 5 Restaurantes"}}
                />

                <Tab.Screen
                    name="Procura"
                    component={Search}
                    options={{title:"Procurar"}}
                />  

                <Tab.Screen
                    name="Account"
                    component={Account}
                    options={{title:"Conta"}}
                />  

            </Tab.Navigator>
        </NavigationContainer>
    )
}
