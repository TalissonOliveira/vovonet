import React,{ useState, useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Animated, Keyboard } from 'react-native'
import { Fontisto, Zocial } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable'

import styles from '../styles/login'
import stylesForm from '../styles/form'
import firebase from '../services/firebase'

export default function login({ navigation }) {
    const AnimatedButton = Animatable.createAnimatableComponent(TouchableOpacity)
    //const AnimatedImg = Animated.createAnimatedComponent(Image)
    const [logo, setLogo] = useState(new Animated.ValueXY({x: 160, y: 160}))
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)
        
       
    }, [])
    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x,{
                toValue: 55,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(logo.y,{
                toValue: 55,
                duration: 100,
                useNativeDriver: true
            })
        ]).start()
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x,{
                toValue: 160,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(logo.y,{
                toValue: 160,
                duration: 100,
                useNativeDriver: true
            })
        ]).start()
    }
    function singIn(email, password){
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
                <Image style={{width: 200, height: 200}}source={require('../../assets/SimpleLogo.svg')}/>
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
                    <Zocial style={{paddingLeft: 5, paddingRight: 5}} name="email" size={26} color="black" />
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
                    <Fontisto style={{paddingLeft: 8, paddingRight: 7}} name="locked" size={26} color="black" />
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
                    <AnimatedButton style={stylesForm.button}
                        animation={'slideInUp'}
                        duration={600}
                        onPress={()=> singIn(email,password)}
                    >
                        <Text style={stylesForm.textBtn}>Entrar</Text>
                    </AnimatedButton>

                    <Animatable.Text style={stylesForm.text}
                        animation={'slideInUp'}
                        duration={750}
                    >
                        ou
                    </Animatable.Text>

                    <AnimatedButton onPress={() => navigation.navigate('Register')}
                        animation={'slideInUp'}
                        duration={860}
                    >
                        <Text style={stylesForm.text}>
                            Clique aqui para criar uma nova conta
                        </Text>
                    </AnimatedButton>
                </View>
                
            </View>
        </KeyboardAvoidingView>
    )
}
