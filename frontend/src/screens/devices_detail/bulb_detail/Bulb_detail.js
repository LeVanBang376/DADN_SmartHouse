import React, { useState } from 'react'
import { View, Text, Pressable, Modal, TextInput, Switch } from 'react-native'
import styles from './styles'
import Color from '../../../colors/Color'
export default function Bulb_detail() {
    const [modalVisible, setModalVisible] = useState(false)
    const [name, setName] = useState('Tốc độ')
    const handlePressIn = (i) => {
        if (i == 1) {
            setName('Ngưỡng trên')
        } else if (i == 2) {
            setName('Ngưỡng dưới')
        } else if (i == 3) {
            setName('Từ')
        } else {
            setName('Đến')
        }
        setModalVisible(true)

    }
    const [isEnabled1, setIsEnabled1] = useState(false)
    const [isEnabled2, setIsEnabled2] = useState(false)
    const [isEnabled3, setIsEnabled3] = useState(false)
    const toggleSwitch1 = () => {
        setIsEnabled1(previousState => !previousState)
    }
    const toggleSwitch2 = () => {
        setIsEnabled2(previousState => !previousState)
    }
    const toggleSwitch3 = () => {
        setIsEnabled3(previousState => !previousState)
    }
    return (
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
                        <Text style={styles.modalText}>{name}</Text>
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

            <View style={styles.container}>
                <Pressable
                    onPress={() => toggleSwitch1()}
                >
                    <View style={styles.container_line}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textLeft}>Trạng thái</Text>
                        </View>
                        <View style={styles.containerSwitch}>
                            <Switch
                                trackColor={{ false: '#767577', true: Color.blue }}
                                thumbColor={isEnabled1 ? '#f4f3f4' : '#f4f3f4'}
                                onValueChange={toggleSwitch1}
                                value={isEnabled1}
                                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            />
                        </View>
                    </View>
                </Pressable>
            </View>

            <View style={styles.container}>
                <Pressable
                    onPress={() => toggleSwitch2()}
                >
                    <View style={styles.container_line}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textLeft}>Tự động theo cảm biến</Text>
                        </View>
                        <View style={styles.containerSwitch}>
                            <Switch
                                trackColor={{ false: '#767577', true: Color.blue }}
                                thumbColor={isEnabled2 ? '#f4f3f4' : '#f4f3f4'}
                                onValueChange={toggleSwitch2}
                                value={isEnabled2}
                                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            />
                        </View>
                    </View>
                </Pressable>

                <View style={styles.line}></View>

                {/* Ngưỡng trên */}
                <Pressable
                    onPress={() => handlePressIn(1)}
                >
                    <View style={styles.container_line}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textLeft}>Ngưỡng trên</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textRight}>35%</Text>
                        </View>
                    </View>
                </Pressable>

                <View style={styles.line}></View>

                {/* Ngưỡng dưới */}
                <Pressable
                    onPress={() => handlePressIn(2)}
                >
                    <View style={styles.container_line}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textLeft}>Ngưỡng dưới</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textRight}>25%</Text>
                        </View>
                    </View>
                </Pressable>
            </View>

            <View style={styles.container}>

                <Pressable
                    onPress={() => toggleSwitch3()}
                >
                    <View style={styles.container_line}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textLeft}>Tự động theo thời gian</Text>
                        </View>
                        <View style={styles.containerSwitch}>
                            <Switch
                                trackColor={{ false: '#767577', true: Color.blue }}
                                thumbColor={isEnabled3 ? '#f4f3f4' : '#f4f3f4'}
                                onValueChange={toggleSwitch3}
                                value={isEnabled3}
                                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            />
                        </View>
                    </View>
                </Pressable>

                <View style={styles.line}></View>

                {/* Start time */}
                <Pressable
                    onPress={() => handlePressIn(3)}
                >
                    <View style={styles.container_line}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textLeft}>Từ</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textRight}>1:00AM 19/03/2023</Text>
                        </View>
                    </View>
                </Pressable>

                <View style={styles.line}></View>

                {/* End time */}
                <Pressable
                    onPress={() => handlePressIn(4)}
                >
                    <View style={styles.container_line}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textLeft}>Đến</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textRight}>1:00AM 19/03/2023</Text>
                        </View>
                    </View>
                </Pressable>
            </View>
        </>
    )
}
