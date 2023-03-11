import React, { useState } from 'react'
import { Alert, View, Text, Switch, Pressable, Modal, TextInput } from 'react-native'
import styles from './styles'
import Color from '../../colors/Color';
export default function Device_state(props) {
    const [isPressed, setIsPressed] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)
    const handlePressIn = () => {
        setIsPressed(true)
        setModalVisible(true)
    }
    return (
        <>
            {
                props.type == "fan" ?
                    (
                        <>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert('Modal has been closed.');
                                    setModalVisible(!modalVisible);
                                }}>
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.modalText}>Tốc độ</Text>
                                        <TextInput
                                            style={styles.input}
                                            value='30%'
                                        />
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setModalVisible(!modalVisible)}>
                                            <Text style={styles.textStyle}>Lưu</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </Modal>
                            <Pressable
                                onPressIn={() => handlePressIn()}
                                onPressOut={() => setIsPressed(false)}
                            >
                                <View style={isPressed ? styles.containerPressed : styles.container}>
                                    <Text>
                                        30%
                                    </Text>
                                </View>
                            </Pressable>
                        </>
                    )
                    : (
                        <View style={styles.containerSwitch}>
                            <Switch
                                trackColor={{ false: '#767577', true: Color.blue }}
                                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
                            />
                        </View>
                    )
            }
        </>

    )
}
