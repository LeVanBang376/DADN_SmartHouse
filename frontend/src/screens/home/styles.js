import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    helloContainer: {
        height: 60,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row'
    },
    helloText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 10
    },
    line: {
        width: '100%',
        height: 4,
        backgroundColor: '#F4F4F4',
    },
    selectRoomText: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10
    },
    roomContainer: {
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap'
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
});