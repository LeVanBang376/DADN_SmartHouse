import React, { useState } from 'react'
import { View, Text, Pressable, Modal, TextInput } from 'react-native'
import styles from './styles'
export default function Fan_detail() {
    const [isPressed, setIsPressed] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const handlePressIn = () => {
        setIsPressed(true)
        setModalVisible(true)
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
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textLeft}>Tốc độ</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textRight}>30%</Text>
                    </View>

                </View>
            </Pressable>
        </>
    )
}
