import {Text, View,
    StyleSheet,
    TouchableOpacity, Dimensions} from 'react-native';
import React           from 'react';
    
export default props => (
    <TouchableOpacity style={[styles.category, { borderColor: props.borderColor }]} onPress={props.onPress}>
        <Text style={styles.categoryName}>{props.title}</Text>
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.categoryDescription}>{props.subTitle}</Text>
            {props.children}
        </View>
        
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    category: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        width: '90%',
        height: (Dimensions.get('window').width*(4/14)),
        paddingLeft: 15,
        paddingTop: '2%',
        marginBottom: 15,
        borderLeftWidth: 8,
        borderColor: '#FC8212',
        borderRadius: 10,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    categoryName: {
        color: '#000',
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    categoryDescription: {
        fontSize: 14,
        width:'80%',
    },
})