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
    const [message, setMessage] = useState('')
    const [keyboard, setKeyboard] = useState(false)



    useEffect(() => {
        setMessage('')
    }, [email, password])

    const AnimatedImg = Animatable.createAnimatableComponent(Image)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

        return () => {
            keyboardDidShowListener.remove()
            keyboardDidHideListener.remove()
        }
    }, [])

    function keyboardDidShow() {
        setKeyboard(true)
    }

    function keyboardDidHide() {
        setKeyboard(false)
    }

    

    function singIn(email, password) {
        if(!email || !password) {
            setMessage('Por favor, preencha todos os campos!')
            return
        }
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                /*
                
                IMPLEMENTAR NAVEGAÇÃO DE TELAS
                
                */
                console.log('Logado')
            })
            .catch((error) => {
                console.log(error.code)
                switch (error.code) {
                    case 'auth/user-not-found':
                        setMessage('Este e-mail não está associado a uma conta Vovonet.')        
                        break;
                    case 'auth/wrong-password':
                        setMessage('E-mail e/ou senha incorretos.')
                        break;
                    case 'auth/invalid-email':
                        setMessage('E-mail e/ou senha incorretos.')        
                        break;
                
                    default:
                        break;
                }
            });
    }

    return (
        <KeyboardAvoidingView style={styles.background}>
            {/* logo */}
            <Animatable.View style={keyboard == true ? styles.hideImage : styles.containerImage}
                animation={'zoomIn'}
                duration={1100}
            >
                <AnimatedImg style={{ width: 200, height: 200 }} source={require('../../assets/SimpleLogo.png')} />
            </Animatable.View>

            {/* formulário */}
            <View style={keyboard == true ? styles.containerFormWithKeyboard : styles.containerForm}>
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
                <Text style={{color: '#ec2300', textAlign: 'center'}}>{message}</Text>
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
