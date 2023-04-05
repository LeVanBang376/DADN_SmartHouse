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
    }

});