import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import UserHelperAPI from '../../userContext/UserHelperContext';
import PublisherAPI from '../../userContext/PublisherContext';
import UserAPI from '../../userContext/UserContext';
import styles from './styles'

const Tab = createBottomTabNavigator();

function State({ route }) {
    const roomID = route.params.id
    const { isChoosed } = React.useContext(UserHelperAPI)
    const { publishCommand } = React.useContext(PublisherAPI)
    const { devicesState, setDevicesState } = React.useContext(UserAPI)
    const [render, setRender] = React.useState(false)
    const currentState = React.useRef(devicesState)
    React.useEffect(() => {
        currentState.current = devicesState
    }, [devicesState])
    const handlePress = () => {
        if (currentState.current["dv" + String(roomID) + "_" + String(isChoosed)] == 'true') {
            publishCommand('{\"ID\":' + roomID + ',\"RELAY\":' + isChoosed + ',\"VALUE\":0}')
            if (roomID == 0) {
                currentState.current["dv0_" + String(isChoosed)] = 'false'
            } else if (roomID == 1) {
                currentState.current["dv1_" + String(isChoosed)] = 'false'
            } else currentState.current["dv2_" + String(isChoosed)] = 'false'
            setDevicesState(currentState.current)
            setRender(!render)
        }
        else {
            publishCommand('{\"ID\":' + roomID + ',\"RELAY\":' + isChoosed + ',\"VALUE\":1}')
            if (roomID == 0) {
                currentState.current["dv0_" + String(isChoosed)] = 'true'
            } else if (roomID == 1) {
                currentState.current["dv1_" + String(isChoosed)] = 'true'
            } else currentState.current["dv2_" + String(isChoosed)] = 'true'
            setDevicesState(currentState.current)
            setRender(!render)
        }
    }
    return (
        <View style={styles.whiteContainer}>
            {currentState.current["dv" + String(roomID) + "_" + String(isChoosed)] == 'true' ?
                (
                    <Pressable onPress={() => handlePress()}>
                        <LinearGradient
                            // Button Linear Gradient
                            colors={['#3366FF', '#6699FF']}
                            start={[0, 0]}
                            end={[1, 1]}
                            style={styles.bigCircle}>
                            <LinearGradient
                                // Button Linear Gradient
                                colors={['#FFFFFF', '#EAEAEA']}
                                start={[0, 0]}
                                end={[1, 1]}
                                style={styles.smallCircle}>
                                <Ionicons
                                    name='md-power-sharp'
                                    size={90}
                                    style={styles.powerIconOn}
                                />
                            </LinearGradient>
                        </LinearGradient>
                    </Pressable>
                ) :
                (
                    <Pressable onPress={() => handlePress()}>
                        <LinearGradient
                            // Button Linear Gradient
                            colors={['#F3F3F3', '#FFFFFF']}
                            start={[0, 0]}
                            end={[1, 1]}
                            style={styles.bigCircle}>
                            <LinearGradient
                                // Button Linear Gradient
                                colors={['#FFFFFF', '#EAEAEA']}
                                start={[0, 0]}
                                end={[1, 1]}
                                style={styles.smallCircle}>
                                <Ionicons
                                    name='md-power-sharp'
                                    size={90}
                                    style={styles.powerIconOff}
                                />
                            </LinearGradient>
                        </LinearGradient>
                    </Pressable>
                )
            }

        </View>
    )
}

function Auto() {
    return (
        <View style={styles.whiteContainer}>
            <View style={styles.autoContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.textLeft1}>Tự động</Text>
                    <Text style={styles.textLeft2}>theo thời gian</Text>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.time}>
                        <Text>Bật</Text>
                        <Text style={styles.timeText}>07:00</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.time}>
                        <Text>Tắt</Text>
                        <Text style={styles.timeText}>17:00</Text>
                    </View>
                </View>
            </View>

            <View style={styles.autoContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.textLeft1}>Tự động</Text>
                    <Text style={styles.textLeft2}>theo cảm biến</Text>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.time}>
                        <Text style={styles.onOff}>Bật</Text>
                        <Text style={styles.timeText}>35</Text>
                        <Text style={styles.unit}>%</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.time}>
                        <Text style={styles.onOff}>Tắt</Text>
                        <Text style={styles.timeText}>25</Text>
                        <Text style={styles.unit}>%</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default function DeviceDetail(props) {
    return (
        <View style={styles.deviceDetailContainer}>
            <View style={styles.nameContainer}>
                <Text>{props.name}</Text>
                <View style={styles.fixContainer}>
                    <Text>Chỉnh sửa</Text>
                    <FontAwesome
                        name='pencil-square-o'
                        size={25}
                        style={styles.icon}
                    />
                </View>
            </View>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false, tabBarIconStyle: { display: "none" }, tabBarLabelStyle: {
                        fontSize: 15,
                        marginBottom: 15
                    },
                }}
            >
                <Tab.Screen name='Trạng thái' component={State} initialParams={{ id: props.id }} />
                <Tab.Screen name='Tự động' component={Auto} />
            </Tab.Navigator>
        </View >
    )
}
