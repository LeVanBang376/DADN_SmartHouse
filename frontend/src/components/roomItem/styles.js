import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    roomItemContainer: {
        width: 160,
        height: 120,
        borderWidth: 1,
        borderColor: '#4067F1',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 15
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 12,
        marginRight: 7
    },
    iconLeft: {
        color: 'black',
        marginTop: 12
    },
    iconRight: {
        color: 'black',
        marginTop: 7
    },
    roomName: {
        fontSize: 16,
        fontWeight: 500,
        marginLeft: 12,
        marginTop: 5
    },
    roomName2: {
        fontSize: 18,
        fontWeight: 500,
    },
    roomItemContainer2: {
        width: 160,
        height: 120,
        borderWidth: 1,
        borderColor: '#4067F1',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
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
        paddingTop: 25,
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
    modalViewNotification: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        paddingTop: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
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
    dropdown1BtnTxtStyle: { color: 'black', textAlign: 'left', fontSize: 20 },
    input: {
        width: 250,
        height: 40,
        margin: 10,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 18,
        paddingLeft: 17,
        paddingBottom: 5,
        paddingTop: 5
    },
});