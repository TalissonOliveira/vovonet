import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import register from '../screens/register'
import login from '../screens/login'
import initial from '../screens/initial'
import home from '../screens/home'
import Tab from './tabLevelChoice'

const Stack = createStackNavigator()

export default function routes(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}>
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
                <Stack.Screen
                    name={'Tabs'}
                    component={Tab}
                    options={{
                        title: "textao",
                        headerTitleContainerStyle: {
                            left: 10, // THIS RIGHT HERE
                        },
                        headerStyle: {
                            backgroundColor: '#51206a',
                        },
                        headerTintColor: '#ffffff',
                        headerTitleStyle: {
                            fontSize: 20,
                            flex: 1,
                            textAlign: 'center',
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}