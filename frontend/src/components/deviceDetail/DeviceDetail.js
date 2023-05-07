import React, { useState } from 'react'
import { View, Text, Pressable, Switch, Modal, SafeAreaView, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import UserHelperAPI from '../../userContext/UserHelperContext';
import PublisherAPI from '../../userContext/PublisherContext';
import UserAPI from '../../userContext/UserContext';
import styles from './styles'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

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

function Auto({ route }) {
    const [hour, setHour] = React.useState(new Date().getHours())
    const [minute, setMinute] = React.useState(new Date().getMinutes())
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled, setIsEnabled] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [autoType, setAutoType] = useState('Tự động theo thời gian')
    setInterval(() => {
        if (new Date().getMinutes() == minute + 1) {
            setMinute(minute + 1)
        }
        if (new Date().getMinutes() == 0 && minute == 60) {
            setMinute(0)
            if (hour == 24) {
                setHour(0)
            } else {
                setHour(hour + 1)
            }
        }
    }, 1000)
    return (
        <View style={styles.whiteContainer}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{route.params.roomName} - {route.params.deviceName}</Text>
                        <Text style={styles.autoText}>{autoType}</Text>
                        {autoType == 'Tự động theo thời gian' ?
                            (
                                <View>
                                    <View style={styles.inputTimeContainer}>
                                        <View style={{ marginLeft: 50 }}>
                                            <Text style={{ fontSize: 18 }}>Bật:</Text>
                                        </View>
                                        <View style={{ width: 60 }}>
                                            <SafeAreaView>
                                                <TextInput
                                                    style={styles.onInput}
                                                // onChangeText={onChangeText}
                                                // value={text}
                                                />
                                            </SafeAreaView>
                                        </View>
                                        <Text>:</Text>
                                        <View style={{ width: 60 }}>
                                            <SafeAreaView>
                                                <TextInput
                                                    style={styles.onInput}
                                                // onChangeText={onChangeText}
                                                // value={text}
                                                />
                                            </SafeAreaView>
                                        </View>
                                    </View>
                                    <View style={styles.inputTimeContainer}>
                                        <View style={{ marginLeft: 50 }}>
                                            <Text style={{ fontSize: 18 }}>Tắt:</Text>
                                        </View>
                                        <View style={{ width: 60 }}>
                                            <SafeAreaView>
                                                <TextInput
                                                    style={styles.onInput}
                                                // onChangeText={onChangeText}
                                                // value={text}
                                                />
                                            </SafeAreaView>
                                        </View>
                                        <Text>:</Text>
                                        <View style={{ width: 60 }}>
                                            <SafeAreaView>
                                                <TextInput
                                                    style={styles.onInput}
                                                // onChangeText={onChangeText}
                                                // value={text}
                                                />
                                            </SafeAreaView>
                                        </View>
                                    </View>
                                </View>
                            )
                            : (
                                <View>
                                    <View style={styles.inputSensorContainer}>
                                        <View style={{ flex: 2 }}>
                                            <Text style={{ fontSize: 18 }}>Bật:</Text>
                                        </View>
                                        <View style={{ flex: 12 }}>
                                            <SafeAreaView>
                                                <TextInput
                                                    style={styles.onInput}
                                                // onChangeText={onChangeText}
                                                // value={text}
                                                />
                                            </SafeAreaView>
                                        </View>
                                    </View>
                                    <View style={styles.inputSensorContainer}>
                                        <View style={{ flex: 2 }}>
                                            <Text style={{ fontSize: 18 }}>Tắt:</Text>
                                        </View>
                                        <View style={{ flex: 12 }}>
                                            <SafeAreaView>
                                                <TextInput
                                                    style={styles.onInput}
                                                // onChangeText={onChangeText}
                                                // value={text}
                                                />
                                            </SafeAreaView>
                                        </View>
                                    </View>
                                </View>
                            )
                        }
                        <View style={styles.buttonContainer}>
                            <View >
                                <Pressable
                                    style={[styles.button, styles.cancelButtonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Hủy bỏ</Text>
                                </Pressable>
                            </View>
                            <View >
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Đồng ý</Text>
                                </Pressable>
                            </View>

                        </View>

                    </View>
                </View>
            </Modal>
            <View style={styles.autoContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textLeft1}>Tự động</Text>
                        <Text style={styles.textLeft2}>theo thời gian</Text>
                    </View>
                    <View style={styles.switchContainer}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? '#4067F1' : '#f4f3f4'}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.time}>
                        <Text style={styles.onOff}>Bật:</Text>
                        <Text style={styles.timeText}>17:00</Text>
                    </View>
                    <View style={styles.time}>
                        <Text style={styles.onOff}>Tắt:</Text>
                        <Text style={styles.timeText}>23:00</Text>
                    </View>
                    <View style={styles.fixContainer2}>
                        <Pressable onPress={() => { setAutoType('Tự động theo thời gian'); setModalVisible(true) }}>
                            <Text style={styles.fixText}>Sửa</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={styles.autoContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textLeft1}>Tự động</Text>
                        <Text style={styles.textLeft2}>theo cảm biến</Text>
                    </View>
                    <View style={styles.switchContainer}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? '#4067F1' : '#f4f3f4'}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.time}>
                        <Text style={styles.onOff}>Bật:</Text>
                        <Text style={styles.timeText}>35</Text>
                        <Text style={styles.unit}>%</Text>
                    </View>
                    <View style={styles.time}>
                        <Text style={styles.onOff}>Tắt:</Text>
                        <Text style={styles.timeText}>25</Text>
                        <Text style={styles.unit}>%</Text>
                    </View>
                    <View style={styles.fixContainer2}>
                        <Pressable onPress={() => { setAutoType('Tự động theo cảm biến'); setModalVisible(true) }}>
                            <Text style={styles.fixText}>Sửa</Text>
                        </Pressable>
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
                <Tab.Screen name='Tự động' component={Auto} initialParams={{ roomName: props.roomName, deviceName: props.name }} />
            </Tab.Navigator>
        </View >
    )
}
