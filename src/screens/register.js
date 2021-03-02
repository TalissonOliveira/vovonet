import React,{ useState, useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5, Fontisto, Zocial } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'
import firebase from '../services/firebase'


import styles from '../styles/register'
import stylesForm from '../styles/form'

export default function register({ navigation }) {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [message, setMessage] = useState('')

    useEffect(() => {
        setMessage('')
    }, [name, email, password])

    function createUser(name, email, password){
        if(!name || !email || !password) {
            setMessage('Por favor, preencha todos os campos!')
            return
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            const userId = user.user.uid
            firebase.firestore().collection("users").doc(userId).set({
                name: name,
                email: email
            })
            .then(() => {
                console.log('Dados do usuário salvos')
            })
            .catch(() => {
                console.error('Falha ao salvar os dados');
            });
            console.log('Usuario cadastrado')
        })
        .catch((error) => {
           console.log(error.code)
            switch (error.code) {
                case 'auth/email-already-in-use':
                    setMessage('Este e-mail já está sendo utilizado. Faça login ou tente outro e-mail!')
                    break;
                case 'auth/invalid-email':
                    setMessage('Formato de e-mail inválido. Por favor, tente novamente!')
                    break;
                case 'auth/weak-password':
                    setMessage('Senha fraca. A sua senha deve conter mais de 6 caracteres!')
                    break;
               default:
                   break;
           }
        });
    }

    return (
        <KeyboardAvoidingView style={styles.background}>
            {/* logo */}
            <Animatable.View style={styles.containerImage}
                animation={'zoomIn'}
                duration={1100}
            >
                <Image style={{width: 200, height: 200}}source={require('../../assets/SimpleLogo.png')}/>
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
                        onChangeText={ text => setName(text)}
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
                <Text style={{color: '#ec2300', textAlign: 'center'}}>{message}</Text>
                <View style={stylesForm.containerBtn}>
                    <Animatable.View
                        animation={'slideInUp'}
                        duration={600}
                    >
                        <TouchableOpacity style={stylesForm.button}
                            onPress={()=> createUser(name, email,password)}
                        >
                            <Text style={stylesForm.textBtn}>Registrar</Text>
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
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={stylesForm.text}>
                                Clique aqui para entrar
                            </Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
                <StatusBar style='dark' backgroundColor='#efefef' translucent={false} />
                
            </View>
        </KeyboardAvoidingView>
    )
}
