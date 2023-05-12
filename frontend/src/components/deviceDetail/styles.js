import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    deviceDetailContainer: {
        flex: 1,
    },
    nameContainer: {
        marginLeft: 12,
        marginRight: 12,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    fixContainer: {
        flexDirection: 'row'
    },
    icon: {
        marginLeft: 5
    },
    whiteContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    autoContainer: {
        width: 300,
        height: 100,
        borderColor: '#4067F1',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10
    },
    topContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5,
    },
    textContainer: {
        flex: 1,
    },
    bottomContainer: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 5,
        flexDirection: 'row',
        marginBottom: 5

    },
    textLeft1: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    switchContainer: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10
    },
    line: {
        marginTop: 10,
        marginBottom: 10,
        width: '75%',
        height: 1,
        backgroundColor: '#BBBBBB',
    },
    time: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeText: {
        fontSize: 24,
    },
    unit: {
        marginTop: 5,
        marginLeft: 1,
        marginRight: 5,
        fontSize: 15
    },
    onOff: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 5,
        fontSize: 15
    },
    fixContainer2: {
        flex: 1,
    },
    fixText: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 24,
        textAlign: 'right'
    },
    bigCircle: {
        height: 160,
        width: 160,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallCircle: {
        height: 130,
        width: 130,
        borderRadius: 65,
        justifyContent: 'center',
        alignItems: 'center'
    },
    powerIconOn: {
        color: '#4067F1',
        shadowOpacity: 2,
        textShadowColor: '#00D1FF',
        textShadowRadius: 10,
        textShadowOffset: { width: 0.2, height: 0.2 },
    },
    powerIconOff: {
        color: '#D2D2D2',
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
        padding: 25,
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'flex-start',
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
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    modalText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        alignSelf: 'center'
    },
    autoText: {
        fontSize: 16,
        alignSelf: 'center'
    },
    onInput: {
        height: 30,
        margin: 12,
        marginBottom: 8,
        borderWidth: 1,
        fontSize: 18
    },
    offInput: {
        height: 30,
        width: 100,
        margin: 12,
        marginBottom: 8,
        marginLeft: 13.5,
        borderWidth: 1,
        fontSize: 18
    },
    inputSensorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 270,
    },
    inputTimeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 270,
    },
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
})