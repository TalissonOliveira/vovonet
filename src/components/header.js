import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import HeaderImage from '../../assets/headerImage'
import { StyleSheet, Dimensions } from 'react-native';


export default function(props){
    let listaDePalavras = props.textCurrent.split(" ")
    listaDePalavras = listaDePalavras.map((palavra, indice) => <Text key={indice} style={styles.textStyle}>{palavra}</Text>)

    return(
        <SafeAreaView style={styles.viewStyle}>
           
            
            {listaDePalavras}
            
            <View style={styles.svgVovo}>
                <HeaderImage/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        paddingHorizontal: '5%',
        flexDirection: 'row',
        flexGrow: 3,
        backgroundColor: '#51206a',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
        
    },
    textStyle: {
        fontSize: 30,
        color: '#ffffff',
        width: 'auto',
        zIndex: 1,
        letterSpacing: 2
        
    },
    svgVovo: {
        flexGrow: 1,
        width: '112%',
        height: '100%',
        flexDirection:'row-reverse',
        alignItems: 'flex-end',
        position: 'absolute',
    },
});