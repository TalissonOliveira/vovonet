import React, {useEffect}            from 'react'
import { View, Text,
    Image, Svg,
    TouchableOpacity, SafeAreaView } from 'react-native'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import * as Animatable               from 'react-native-animatable'
import styles                        from '../styles/home'

import HeaderSVG from '../../assets/headerImage'
import SmartPhoneSVG  from '../../assets/smartphone'
import LaptopSVG   from '../../assets/laptop'
import ChromecastSVG   from '../../assets/chromecast'

export default function home({ navigation }) {
    const AnimatedButton =  Animatable.createAnimatableComponent(TouchableOpacity)
    const AnimatedImg    =  Animatable.createAnimatableComponent(Image)


    function changeScreen(title="NÃO DEFINIDO", headerText='header text not defined'){
        navigation.navigate('Tabs',{title:title, headerText:headerText})
    }
    




    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.headerContainer}>
                
                <View style={styles.header}>
                    <TouchableOpacity style={styles.menu}>
                        <Ionicons name="md-menu" size={30} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Categoria</Text>
                </View>

                <Text style={styles.description}>Olá, nome!{'\n'}Escolha uma categoria para começar a aprender.</Text>
                <View style={{ flex: 1,flexDirection:'row-reverse', alignItems:'flex-end', zIndex:0}}>
                    <HeaderSVG/>
                </View>
                
                
                
            </View>



            <View style={styles.body}>
                
                <TouchableOpacity style={[styles.category, { borderColor: '#FC8212' }]} onPress={() => changeScreen('Celular', 'Aprenda a utilizar o seu smartphone')}>
                    <Text style={styles.categoryName}>Celular</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.categoryDescription}>Aprenda a utilizar o seu smartphone de maneira mais eficiente</Text>
                        <SmartPhoneSVG/>
                    </View>
                    
                </TouchableOpacity>


                <TouchableOpacity style={[styles.category, { borderColor: '#00A360' }]} onPress={() => changeScreen('Computador')}>
                    <Text style={styles.categoryName}>Computador</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.categoryDescription}>Aprenda a utilizar o seu computador de maneira mais eficiente</Text>

                        <LaptopSVG/>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.category, { borderColor: '#20C6FA' }]} onPress={() => changeScreen('Outros dispositivos')}>
                    <Text style={styles.categoryName}>Outros dispositivos</Text>
                    
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.categoryDescription}>Aprenda a utilizar outros dispositivos de maneira mais eficiente</Text>

                        <ChromecastSVG/>
                    </View>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}
