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
    }
})