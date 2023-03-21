import { StyleSheet } from 'react-native'
import Color from '../../../colors/Color';
export default StyleSheet.create({
    container: {
        marginLeft: 12,
        marginRight: 12,
        marginTop: 15,
        borderRadius: 20,
        backgroundColor: '#FFFFFF'
    },
    container_line: {
        flexDirection: 'row',
        alignItems: 'space-between',
    },
    textContainer: {
        flex: 1
    },
    textLeft: {
        margin: 10,
        marginRight: 0
    },
    textRight: {
        margin: 10,
        marginLeft: 0,
        marginRight: 20,
        textAlign: 'right',
    },
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignSelf: 'center'
    },
    buttonClose: {
        backgroundColor: Color.blue,
        width: 100
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 10,
    },
    input: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 15
    },
    containerSwitch: {
        flex: 1,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    line: {
        marginLeft: 10,
        marginRight: 10,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});