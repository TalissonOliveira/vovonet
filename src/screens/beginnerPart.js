import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import CardView from '../components/customButton'

export default props => (

        <SafeAreaView style={{ flex: 1, fontSize: 30, justifyContent: 'center', alignItems: 'center'}}>
            <CardView  title="Introdução"            borderColor='#20C6FA' onPress={null}
                                subTitle="Primeiro contato com o estudo"/>
        
            <CardView  title="Uso básico"            borderColor='#20C6FA' onPress={null}
                                subTitle="Vamos dar os primeiros passos"/>

            <CardView  title="Uso dia a dia"            borderColor='#20C6FA' onPress={null}
                                subTitle="Vamos ver a melhor forma de usa-lo diariamente"/>
        </SafeAreaView>
    

    
)