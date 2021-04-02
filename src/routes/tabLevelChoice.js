import React, {useEffect}                from "react"
import {Dimensions, View}      from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BeginnerPart                      from '../screens/beginnerPart'
import IntermediatePart                  from '../screens/intermediatePart'
import AdvancedPart                      from '../screens/advancedPart'
import Header                            from '../components/header'
import { AntDesign, SimpleLineIcons }    from '@expo/vector-icons'
import OptionsMenu from "react-native-option-menu"



const Tab = createMaterialTopTabNavigator()
const myIconOptions = (<SimpleLineIcons name="options-vertical" size={20} color="white"/>)



export default props => {
    useEffect(()=>{
            props.navigation.setOptions({ 
                title: props.route.params.title,
                headerLeft:() => (
                    <View style={{paddingLeft: 8}}>
                        <AntDesign name="arrowleft" size={24} color="white" onPress={()=>{ props.navigation.goBack()}}/>
                    </View>),
                headerRight:() => (
                    <View style={{paddingRight: 15}}>
                        <OptionsMenu
                            customButton={myIconOptions}
                            destructiveIndex={1}
                            options={["Edit", "Delete", "Cancel"]}
                            actions={[() => alert("Implemetar Edit"),() => alert("Implementar Delete")]}/>
                    </View>),
            })
  
    })
    console.warn(111)
    
    return(
    <>
        <Header textCurrent = {props.route.params.headerText} />
        <View style={{flexGrow:17}}>
            <Tab.Navigator  tabBarOptions={{
                
                activeTintColor: '#51206a',
                inactiveTintColor: '#716F6F',
                tabStyle:{
                    width: 'auto'
                },
                labelStyle: {
                    fontSize: Dimensions.get('screen').width/(23),
                    fontWeight:'bold',
                    
                },
                indicatorStyle:{
                    backgroundColor:'#51206a',
                    height:'8%',
                },  
                
            }}>
                <Tab.Screen key={1} name = "Iniciante"    component= {BeginnerPart}    />
                <Tab.Screen key={2} name = "Intermediáro" component= {IntermediatePart}/>
                <Tab.Screen key={3} name = "Avançado"     component= {AdvancedPart}    />
            </Tab.Navigator>
        </View>
    </>
    )
}