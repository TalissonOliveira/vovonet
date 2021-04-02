import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CardView from '../components/CardView'

export default props => (

        <SafeAreaView  style={{ flexGrow: 1, width:'100%'}}>
                <ScrollView style={{flexGrow:1, width:'100%'} } 
                            contentContainerStyle={{justifyContent: 'center', alignItems: 'center', marginTop:'5%'}}>

                        <CardView  title="Introdução"            borderColor='#20C6FA' onPress={null}
                                        subTitle="Primeiro contato com o estudo"/>
                
                        <CardView  title="Uso básico"            borderColor='#20C6FA' onPress={null}
                                        subTitle="Vamos dar os primeiros passos"/>

                        <CardView  title="Uso dia a dia"         borderColor='#20C6FA' onPress={null}
                                        subTitle="Vamos ver a melhor forma de usa-lo diariamente"/>
                </ScrollView>
        </SafeAreaView>
    
)