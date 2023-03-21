import React, { useState } from 'react'
import { Text, View, Modal, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
export default function Notifications(props) {
    const [modalVisible, setModalVisible] = useState(true)
    return (
        <>
            {props.type == 'question' ?
                (
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
                                <Text style={styles.modalText}>Bạn có chắc chắn muốn làm như vậy?</Text>
                                <View style={styles.modalButton}>
                                    <Pressable
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <LinearGradient
                                            colors={['rgba(232, 255, 89, 1.0)', 'rgba(63, 244, 0, 0.63)']}
                                            style={styles.linearGradient}>
                                            <Text style={styles.textStyle}>Đồng ý</Text>
                                        </LinearGradient>
                                    </Pressable>

                                    <Pressable
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <LinearGradient
                                            colors={['rgba(233, 98, 22, 1.0)', 'rgba(255, 61, 0, 0.54)']}
                                            style={styles.linearGradient}>
                                            <Text style={styles.textStyle}>Hủy bỏ</Text>
                                        </LinearGradient>
                                    </Pressable>
                                </View>


                            </View>
                        </View>
                    </Modal>
                ) :
                [props.type == 'password' ?
                    (
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
                                    <Text style={[styles.modalText]}>Đổi mật khẩu thành công</Text>
                                    <View style={styles.modalButton}>
                                        <Pressable
                                            onPress={() => setModalVisible(!modalVisible)}>
                                            <LinearGradient
                                                colors={['rgba(232, 255, 89, 1.0)', 'rgba(63, 244, 0, 0.63)']}
                                                style={styles.linearGradient}>
                                                <Text style={styles.textStyle}>OK</Text>
                                            </LinearGradient>
                                        </Pressable>
                                    </View>


                                </View>
                            </View>
                        </Modal>
                    ) :
                    [props.type == 'signup' ?
                        (
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
                                        <Text style={[styles.modalText]}>Đăng ký thành công</Text>
                                        <View style={styles.modalButton}>
                                            <Pressable
                                                onPress={() => setModalVisible(!modalVisible)}>
                                                <LinearGradient
                                                    colors={['rgba(232, 255, 89, 1.0)', 'rgba(63, 244, 0, 0.63)']}
                                                    style={styles.linearGradient}>
                                                    <Text style={styles.textStyle}>OK</Text>
                                                </LinearGradient>
                                            </Pressable>
                                        </View>


                                    </View>
                                </View>
                            </Modal>
                        ) :
                        (
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
                                        <Text style={[styles.modalText]}>Gửi yêu cầu thành công</Text>
                                        <View style={styles.modalButton}>
                                            <Pressable
                                                onPress={() => setModalVisible(!modalVisible)}>
                                                <LinearGradient
                                                    colors={['rgba(232, 255, 89, 1.0)', 'rgba(63, 244, 0, 0.63)']}
                                                    style={styles.linearGradient}>
                                                    <Text style={styles.textStyle}>OK</Text>
                                                </LinearGradient>
                                            </Pressable>
                                        </View>


                                    </View>
                                </View>
                            </Modal>
                        )

                    ]

                ]
            }

        </>
    )
}
