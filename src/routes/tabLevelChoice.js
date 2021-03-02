import React, {useEffect} from "react"
import {View} from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BeginnerPart from '../screens/beginnerPart'
import IntermediatePart from '../screens/intermediatePart'
import AdvancedPart from '../screens/advancedPart'
import TopPart from '../screens/topPart'



const Tab = createMaterialTopTabNavigator()


export default props => {
    useEffect(()=>{
        props.navigation.setOptions({ title: props.route.params.title})
    })
    
    /*

        Ver resultado do warn abaixo
    */
    return(
    <>
        <TopPart />
        <View style={{flexGrow:8}}>
            <Tab.Navigator tabBarOptions={{
                activeTintColor: '#51206A',
                inactiveTintColor: '#716F6F',
                labelStyle: {fontSize: 20}
                }}>
                <Tab.Screen name = "Iniciante" component= {BeginnerPart}/>
                <Tab.Screen name = "Intermediáro" component= {IntermediatePart}/>
                <Tab.Screen name = "Avançado" component= {AdvancedPart}/>
            </Tab.Navigator>
        </View>
    </>
    )
}