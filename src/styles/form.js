import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        color: '#11182A',
        fontSize: 18,
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    
    containerInput: {
        width: '100%',
        height: 40, 
        flexDirection: 'row',
        alignItems:'center',
        borderBottomWidth: 1,
        borderBottomColor: '#11182A',
        marginBottom: 20
    
    },
    input: {
        width: '100%',
        fontSize: 17,
        marginLeft: 10,
    },
    containerBtn: {
        width: '100%',
        marginTop: 10
    },
    button: {
        backgroundColor: '#51206A',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15, 
        
    },
    textBtn: {
        color: '#fff',
        fontSize: 20,  
    },
    text:{
        color: '#11182A',
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 8
    }
});
