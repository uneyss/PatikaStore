import {Dimensions, StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex:1,
        borderRadius: 10,
        padding:10,
        marginBottom:10,
        marginLeft: 10,
        marginRight: 10
    },

    innerContanier: {
        padding: 5,
    },

    image: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'contain'

        
    },

    title: {
        fontWeight: 'bold',
        fontSize: 20
    },

    price: {
        marginTop: 5,
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 15,
    },

    instock: {
        color: 'red',
        fontWeight: 'bold',
    }
})