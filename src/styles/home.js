import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
    },
    headerContainer: {
        height: '28%',
        backgroundColor: '#51206A',
        paddingLeft: 15
    },
    header: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menu: {
        position: 'absolute',
        left: 0,
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '500',
        paddingRight: 15,
    },
    description: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '500',
        marginTop: 16,
    },
    image: {
        width: 130,
        height: 105,
        position: 'absolute',
        bottom: 0,
        right: 15
    },

    //Body
    body: {
        height: '72%',
        alignItems: 'center',
        marginTop: 20
    },
    category: {
        backgroundColor: '#fff',
        width: '90%',
        height: 110,
        justifyContent: 'center',
        paddingLeft: 15,
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
        fontSize: 14
    },
    categoryIcon: {
        width: 65,
        height: 65,
        opacity: 0.3,
        alignSelf: 'flex-end',
        right: 15,
        bottom: 13,
    }
});
