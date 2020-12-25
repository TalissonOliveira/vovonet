import React,{ useState, useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome5, Fontisto, Zocial } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'
import firebase from '../services/firebase'

import styles from '../styles/register'
import stylesForm from '../styles/form'

export default function register({ navigation }) {
    const [user, setUser] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    function createUser(email, password){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed in
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    }
    const AnimatedButton = Animatable.createAnimatableComponent(TouchableOpacity)
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
                    animation='bounceInLeft'
                    duration={900}
                >    
                    Nome
                </Animatable.Text>
                <Animatable.View style={stylesForm.containerInput}
                    animation='bounceInLeft'
                    duration={1100}
                >
                    <FontAwesome5 style={{paddingLeft: 5, paddingRight: 4}} name="user-alt" size={26} color="black" />
                    <TextInput style={stylesForm.input}
                        placeholder={'Digite seu nome'}
                        onChangeText={ text => setUser(text)}
                        autoCorret={false}
                    />
                </Animatable.View>

                <Animatable.Text style={stylesForm.label}
                    animation='bounceInLeft'
                    duration={1300}
                >
                    E-mail
                </Animatable.Text>
                <Animatable.View style={stylesForm.containerInput}
                    animation='bounceInLeft'
                    duration={1500}
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
                    animation='bounceInLeft'
                    duration={1700}
                >
                    Senha
                </Animatable.Text>
                <Animatable.View style={stylesForm.containerInput}
                    animation='bounceInLeft'
                    duration={1900}
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
                        onPress={()=> createUser(email,password)}
                    >
                        <Text style={stylesForm.textBtn}>Registrar</Text>
                    </AnimatedButton>

                    <Animatable.Text style={stylesForm.text}
                        animation={'slideInUp'}
                        duration={750}
                    >
                        ou
                    </Animatable.Text>

                    <AnimatedButton onPress={() => navigation.navigate('Login')}
                        animation={'slideInUp'}
                        duration={860}
                    >
                        <Text style={stylesForm.text}>
                            Clique aqui para entrar
                        </Text>
                    </AnimatedButton>
                </View>
                
            </View>
        </KeyboardAvoidingView>
    )
}
