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
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10
    },
    leftContainer: {
        flex: 4,
        marginLeft: 25,
        justifyContent: 'center',
    },
    rightContainer: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLeft1: {
        fontSize: 20,
        fontWeight: 'bold'
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
        marginLeft: 10
    },
    unit: {
        marginTop: 8,
        marginLeft: 1,
        marginRight: 5,
        fontSize: 15
    },
    onOff: {
        marginRight: 15,
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
    }
})