import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'

import styles from '../styles/home'

export default function home({ navigation }) {
    const AnimatedButton = Animatable.createAnimatableComponent(TouchableOpacity)
    const AnimatedImg = Animatable.createAnimatableComponent(Image)

    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}
