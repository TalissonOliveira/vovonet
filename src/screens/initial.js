import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import * as Animatable from 'react-native-animatable'

import styles from '../styles/initial'

export default function InitialScreen({ navigation }) {
    const AnimatedButton = Animatable.createAnimatableComponent(TouchableOpacity)
    const AnimatedImg = Animatable.createAnimatableComponent(Image)

    return (
        <View style={styles.background}>
            <Animatable.View style={styles.containerImg}
                animation={'zoomIn'}
                duration={1900}
            >
                <AnimatedImg style={{ width: 280, height: 280 }} source={require('../../assets/logo.png')}
                    animation={'swing'}
                    iterationCount={"infinite"}
                    iterationDelay={2000}
                    easing={'ease-in-sine'}
                />
            </Animatable.View>

            <View style={styles.containerBtn}>
                <AnimatedButton style={[styles.button, { backgroundColor: '#52246A' }]}
                    onPress={() => navigation.navigate('Login')}
                    animation={'bounceInLeft'}
                    duration={2400}
                >
                    <Text style={styles.textBtn}>Entrar</Text>
                </AnimatedButton>
                <AnimatedButton style={[styles.button, { backgroundColor: '#6310FF' }]}
                    onPress={() => navigation.navigate('Register')}
                    animation={'bounceInRight'}
                    duration={2400}
                >
                    <Text style={styles.textBtn}>Cadastrar</Text>
                </AnimatedButton>
            </View>
            <StatusBar style='light' backgroundColor='#11182A' translucent={false}/>
        </View>
    )
}
