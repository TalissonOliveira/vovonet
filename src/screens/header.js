import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import HeaderImage from '../../assets/headerImage'
import stylesHeader  from "../styles/header";

export default function(props){
    let listaDePalavras = props.textCurrent.split(" ")
    listaDePalavras = listaDePalavras.map((palavra, indice) => <Text key={indice} style={stylesHeader.textStyle}>{palavra}</Text>)

    return(
        <View style={stylesHeader.viewStyle}>
           
            <>
            {listaDePalavras}
            </>
            <View style={stylesHeader.svgVovo}>
                <HeaderImage/>
            </View>
        </View>
    )
}