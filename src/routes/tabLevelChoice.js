import React, {useEffect}                from "react"
import {Dimensions, Platform, View}      from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BeginnerPart                      from '../screens/beginnerPart'
import IntermediatePart                  from '../screens/intermediatePart'
import AdvancedPart                      from '../screens/advancedPart'
import Header                            from '../components/header'
import { AntDesign }                     from '@expo/vector-icons';
import { TabBarIndicator } from "react-native-tab-view"



const Tab = createMaterialTopTabNavigator()


export default props => {
    useEffect(()=>{
        if (Platform.OS === 'ios'){
            props.navigation.setOptions({ 
                title: props.route.params.title,
                headerLeft:() => (
                    <View style={{paddingLeft: 8}}>
                        <AntDesign name="arrowleft" size={24} color="white" onPress={()=>{ props.navigation.goBack()}}/>
                    </View>),
            })
        }

        else{
            props.navigation.setOptions({ 
                title: props.route.params.title,
            })
        }        
    })
    
    /*

        Ver resultado do warn abaixo
    */
    return(
    <>
        <Header textCurrent = {props.route.params.headerText} />
        <View style={{flexGrow:17}}>
            <Tab.Navigator  tabBarOptions={{
                
                activeTintColor: '#51206a',
                inactiveTintColor: '#716F6F',
                contentContainerStyle:{
                    justifyContent:'center'
                },
                tabStyle:{
                    width:'auto',
                },
                labelStyle: {
                    fontSize: Math.floor(Dimensions.get('screen').width/23),
                    fontWeight:'bold',
                },
                indicatorStyle:{
                    backgroundColor:'#51206a',
                    height:'8%'
                }
                
            }}>
                <Tab.Screen name = "Iniciante" component= {BeginnerPart}/>
                <Tab.Screen name = "Intermediáro" component= {IntermediatePart}/>
                <Tab.Screen name = "Avançado" component= {AdvancedPart}/>
            </Tab.Navigator>
        </View>
    </>
    )
}