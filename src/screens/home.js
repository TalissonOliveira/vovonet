﻿import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import * as Animatable from 'react-native-animatable'

import styles from '../styles/home'

export default function home({ navigation }) {
    const AnimatedButton =  Animatable.createAnimatableComponent(TouchableOpacity)
    const AnimatedImg    =  Animatable.createAnimatableComponent(Image)


    function changeScreen(titulo="NÃO DEFINIDO"){
        navigation.navigate('Tabs',{title:titulo})
    }





    return (
        <View style={styles.container}>
            
            <View style={styles.headerContainer}>
                
                <View style={styles.header}>
                    <TouchableOpacity style={styles.menu}>
                        <Ionicons name="md-menu" size={30} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Categoria</Text>
                </View>

                <Text style={styles.description}>Olá, nome!{'\n'}Escolha uma categoria para começar a aprender.</Text>
                <Image source={require('../../assets/headerImage.svg')} style={styles.image} />
            </View>



            <View style={styles.body}>
                
                <TouchableOpacity style={[styles.category, { borderColor: '#FC8212' }]} onPress={() => changeScreen('Celular')}>
                    <Text style={styles.categoryName}>Celular</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.categoryDescription}>Aprenda a utilizar o seu smartphone de maneira mais eficiente</Text>

                        <Image style={styles.categoryIcon} source={require('../../assets/smartphone.svg')} />

                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.category, { borderColor: '#00A360' }]} onPress={() => changeScreen('Computador')}>
                    <Text style={styles.categoryName}>Computador</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.categoryDescription}>Aprenda a utilizar o seu smartphone de maneira mais eficiente</Text>

                        <Image style={styles.categoryIcon} source={require('../../assets/laptop.svg')} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.category, { borderColor: '#20C6FA' }]} onPress={() => changeScreen('Outros dispositivos')}>
                    <Text style={styles.categoryName}>Outros dispositivos</Text>
                    
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.categoryDescription}>Aprenda a utilizar o seu smartphone de maneira mais eficiente</Text>

                        <Image style={styles.categoryIcon} source={require('../../assets/chromecast.svg')} />
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}
