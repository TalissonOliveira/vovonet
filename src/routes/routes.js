import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import register from '../screens/register'
import login from '../screens/login'
import initial from '../screens/initial'
import home from '../screens/home'

const Stack = createStackNavigator()

export default function routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Initial'}>
                <Stack.Screen
                    name={'Register'}
                    component={register}
                    options={{
                        headerShown: false
                    }}

                />

                <Stack.Screen
                    name={'Login'}
                    component={login}
                    options={{
                        headerShown: false
                    }}

                />

                <Stack.Screen
                    name={'Initial'}
                    component={initial}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name={'Home'}
                    component={home}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}