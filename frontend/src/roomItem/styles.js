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
    }
});