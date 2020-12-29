import React, { useState, useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Animated, Keyboard } from 'react-native'
import { Fontisto, Zocial } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import * as Animatable from 'react-native-animatable'

import styles from '../styles/login'
import stylesForm from '../styles/form'
import firebase from '../services/firebase'

export default function login({ navigation }) {
    const [logo, setLogo] = useState(new Animated.ValueXY({ x: 160, y: 160 }))
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const AnimatedImg = Animatable.createAnimatableComponent(Image)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)


    }, [])
    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 55,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(logo.y, {
                toValue: 55,
                duration: 100,
                useNativeDriver: true
            })
        ]).start()
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 160,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(logo.y, {
                toValue: 160,
                duration: 100,
                useNativeDriver: true
            })
        ]).start()
    }
    function singIn(email, password) {
        console.log("Verificando")
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                /*
                
                IMPLEMENTAR NAVEGAÇÃO DE TELAS
                
                */
                console.log('Logado')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('Erro de login')
            });
    }

    return (
        <KeyboardAvoidingView style={styles.background}>
            {/* logo */}
            <Animatable.View style={styles.containerImage}
                animation={'zoomIn'}
                duration={1100}
            >
                <AnimatedImg style={{ width: 200, height: 200 }} source={require('../../assets/SimpleLogo.png')} />
            </Animatable.View>

            {/* formulário */}
            <View style={styles.containerForm}>
                {/* inputs */}
                <Animatable.Text style={stylesForm.label}
                    animation='bounceInRight'
                    duration={1100}
                >
                    E-mail
                </Animatable.Text>
                <Animatable.View style={stylesForm.containerInput}
                    animation='bounceInRight'
                    duration={1300}
                >
                    <Zocial style={{ paddingLeft: 5, paddingRight: 5 }} name="email" size={26} color="black" />
                    <TextInput style={stylesForm.input}
                        placeholder={'Digite seu e-mail'}
                        autoCorret={false}
                        autoCapitalize={'none'}
                        onChangeText={(text) => setEmail(text)}
                    />
                </Animatable.View>

                <Animatable.Text style={stylesForm.label}
                    animation='bounceInRight'
                    duration={1500}
                >
                    Senha
                </Animatable.Text>
                <Animatable.View style={stylesForm.containerInput}
                    animation='bounceInRight'
                    duration={1700}
                >
                    <Fontisto style={{ paddingLeft: 8, paddingRight: 7 }} name="locked" size={26} color="black" />
                    <TextInput style={stylesForm.input}
                        placeholder={'Digite sua senha'}
                        autoCorret={false}
                        autoCapitalize={'none'}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    />
                </Animatable.View>
                {/* botões */}
                <View style={stylesForm.containerBtn}>
                    <Animatable.View
                        animation={'slideInUp'}
                        duration={600}
                    >
                        <TouchableOpacity style={stylesForm.button} onPress={() => singIn(email, password)}>
                            <Text style={stylesForm.textBtn}>Entrar</Text>
                        </TouchableOpacity>
                    </Animatable.View>

                    <Animatable.Text style={stylesForm.text}
                        animation={'slideInUp'}
                        duration={750}
                    >
                        ou
                    </Animatable.Text>

                    <Animatable.View
                        animation={'slideInUp'}
                        duration={860}
                    >
                        <TouchableOpacity onPress={() => {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Register' }]
                           })
                        }}>
                            <Text style={stylesForm.text}>
                                Clique aqui para criar uma nova conta
                            </Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
                
            </View>
            <StatusBar style='dark' backgroundColor='#efefef' translucent={false} />
        </KeyboardAvoidingView>
    )
}
