import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    deviceContainer1: {
        width: 100,
        height: 100,
        borderColor: '#A9A9A9',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    deviceContainer2: {
        width: 100,
        height: 100,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    icon1: {
        color: '#A9A9A9'
    },
    text1: {
        color: '#A9A9A9'
    },
    icon2: {
        color: '#000000'
    },
    text2: {
        color: '#000000'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
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
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 270
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignSelf: 'center',
        marginTop: 10,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    cancelButtonClose: {
        backgroundColor: '#969998',
    },
    dropdownStyle: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        width: 250,
        height: 40,
        margin: 10,
        marginBottom: 5,
        fontSize: 18,
        paddingLeft: 5,
        paddingBottom: 5,
        paddingTop: 5,
    },
    dropdown1BtnStyle: {
        width: 250,
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#444',
        margin: 10,
        marginBottom: 5,
        fontSize: 18,
        paddingLeft: 5,
        paddingBottom: 5,
        paddingTop: 5,
    },
    dropdown1BtnTxtStyle: { color: 'black', textAlign: 'left' },
    input: {
        width: 250,
        height: 40,
        margin: 10,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 18,
        paddingLeft: 15,
        paddingBottom: 5,
        paddingTop: 5
    },
})