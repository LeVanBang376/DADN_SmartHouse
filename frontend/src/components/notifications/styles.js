import { StyleSheet } from 'react-native'
import Color from '../../colors/Color';
export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    modalText: {
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        borderRadius: 20
    }
});