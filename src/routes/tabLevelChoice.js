import React from "react"
import {} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BeginnerPart from '../screens/beginnerPart'
import IntermediatePart from '../screens/intermediatePart'
import AdvancedPart from '../screens/advancedPart'


const Tab = createBottomTabNavigator()

export default props => (

        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                activeTintColor: '#51206A',
                inactiveTintColor: '#716F6F',
                labelStyle: {fontSize: 20}
                }}>
                <Tab.Screen name = "Iniciante" component= {BeginnerPart}/>
                <Tab.Screen name = "Intermediáro" component= {IntermediatePart}/>
                <Tab.Screen name = "Avançado" component= {AdvancedPart}/>
            </Tab.Navigator>
        </NavigationContainer>
)