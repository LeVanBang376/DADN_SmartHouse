import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    sensorContainer: {
        width: 150,
        height: 80,
        borderWidth: 1,
        borderColor: '#4067F1',
        borderRadius: 10,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    icon: {
        alignSelf: 'center',
        marginLeft: 12,
        marginRight: 12,
        color: '#4067F1'
    },
    sensorName: {
        marginTop: 12,
        fontSize: 15,
    },
    sensorValue: {
        flexDirection: 'row',
    },
    value: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    unit: {
        marginTop: 9
    },
    sensorContainer2: {
        width: 150,
        height: 80,
        borderWidth: 1,
        borderColor: '#4067F1',
        borderRadius: 10,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
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
        marginLeft: 10,
        marginRight: 10
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
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
        fontSize: 20,
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
        paddingLeft: 15,
        paddingBottom: 5,
        paddingTop: 5
    },
})