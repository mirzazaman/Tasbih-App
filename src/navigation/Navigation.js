import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../modules/home/Home';
import Setting from '../modules/setting/Setting';

export default function Navigation() {

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Setting"
                    component={Setting}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}