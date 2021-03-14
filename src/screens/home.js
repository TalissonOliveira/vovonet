import React, { useEffect }from 'react'
import { View,
       SafeAreaView }      from 'react-native'
import { Ionicons }        from '@expo/vector-icons'
import   styles            from '../styles/home'

import Header        from '../components/header'
import SmartPhoneSVG from '../../assets/smartphone'
import LaptopSVG     from '../../assets/laptop'
import ChromecastSVG from '../../assets/chromecast'

import CardView  from '../components/CardView'

export default function home({ navigation }) {

    // Adicionando ícone ao lado do título da tela
    useEffect(()=>{
        navigation.setOptions({ 
            headerLeft:() => (
                <View style={{paddingLeft: 15}}>
                    <Ionicons name="md-menu" size={30} color="white" onPress={()=>alert("Implementar slide screen")}/>
                </View>),
        })
    })

    console.warn(392)
    
    //Titulos e subtitulos das próximas telas
    const smartphoneTitle = 'Celular'
    const smartphoneSubtitle = 'Aprenda a utilizar o seu smartphone'

    const computerTitle = 'Computador'
    const computerSubtitle = undefined

    const othersTitle = 'Outros Dispositivos'
    const othersSubtitle = undefined
    
    //Função para transitar a outras telas
    function changeScreen(title="NÃO DEFINIDO", headerText='header text not defined'){
        navigation.navigate('Tabs',{title:title, headerText:headerText})
    }


    return (
        <SafeAreaView style={styles.container}>
            

            <Header textCurrent='Escolha uma categoria para começar a aprender.'/>


            <View style={styles.body}>
                
                <CardView title="Celular"             borderColor='#FC8212' onPress={() => changeScreen(smartphoneTitle, smartphoneSubtitle)}
                              subTitle="Aprenda a utilizar o seu celular de maneira mais eficiente">
                    <SmartPhoneSVG/>
                </CardView>
                
                
                <CardView title='Computador'          borderColor='#00A360' onPress={() => changeScreen(computerTitle, computerSubtitle)}
                              subTitle='Aprenda a utilizar o seu computador de maneira mais eficiente'>
                    <LaptopSVG/>
                </CardView>


                <CardView title='Outros dispositivos' borderColor='#20C6FA' onPress={() => changeScreen(othersTitle, othersSubtitle)}
                              subTitle='Aprenda a utilizar outros dispositivos de maneira mais eficiente'>
                    <ChromecastSVG/>
                </CardView>

            </View>

        </SafeAreaView>
    )
}
