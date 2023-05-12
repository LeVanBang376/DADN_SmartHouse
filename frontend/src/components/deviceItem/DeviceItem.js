import React, { useState } from 'react'
import { View, Text, Pressable, Modal, SafeAreaView, TextInput } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'
import styles from './styles'
import UserHelperAPI from '../../userContext/UserHelperContext'
export default function DeviceItem(props) {
    const { isChoosed } = React.useContext(UserHelperAPI)
    const [addDeviceModalVisible, setAddDeviceModalVisible] = useState(false);
    const deviceType = ["Bóng đèn", "Quạt"]
    return (
        props.addDevice == false ?
            (
                <View style={isChoosed == props.id ? styles.deviceContainer2 : styles.deviceContainer1}>
                    {props.type == 'fan' ?
                        (
                            <MaterialCommunityIcons
                                name='fan'
                                size={45}
                                style={isChoosed == props.id ? styles.icon2 : styles.icon1}
                            />
                        ) :
                        (
                            <Ionicons
                                name='bulb-outline'
                                size={45}
                                style={isChoosed == props.id ? styles.icon2 : styles.icon1}
                            />
                        )
                    }
                    <Text style={isChoosed == props.id ? styles.text2 : styles.text1}>{props.name}</Text>
                </View>
            ) : (
                <>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={addDeviceModalVisible}
                        onRequestClose={() => {
                            setAddDeviceModalVisible(!addDeviceModalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Tên thiết bị</Text>
                                    <View style={{ width: 60 }}>
                                        <SafeAreaView>
                                            <TextInput
                                                style={styles.input}
                                            // onChangeText={setHelperDeviceName}
                                            // value={helperDeviceName}
                                            />
                                        </SafeAreaView>
                                    </View>

                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Loại thiết bị</Text>
                                    <SelectDropdown
                                        data={deviceType}
                                        onSelect={(selectedItem, index) => {
                                            console.log(selectedItem, index)
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            // text represented after item is selected
                                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                                            return selectedItem
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            // text represented for each item in dropdown
                                            // if data array is an array of objects then return item.property to represent item in dropdown
                                            return item
                                        }}
                                        // buttonStyle={styles.dropdownStyle}
                                        rowTextStyle={{ textAlign: 'left' }}
                                        // buttonTextStyle={{ textAlign: 'right' }}
                                        buttonStyle={styles.dropdown1BtnStyle}
                                        buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                        renderDropdownIcon={isOpened => {
                                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                                        }}
                                    />
                                </View>
                                <View style={styles.buttonContainer}>
                                    <View>
                                        <Pressable
                                            style={[styles.button, styles.cancelButtonClose]}
                                            onPress={() => setAddDeviceModalVisible(!addDeviceModalVisible)}>
                                            <Text style={styles.textStyle}>Hủy bỏ</Text>
                                        </Pressable>
                                    </View>
                                    <View >
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setAddDeviceModalVisible(!addDeviceModalVisible)}>
                                            <Text style={styles.textStyle}>Đồng ý</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>

                    <Pressable onPress={() => setAddDeviceModalVisible(true)}>
                        <View style={styles.deviceContainer1}>
                            <Text style={styles.text1}>Thêm</Text>
                            <Text style={styles.text1}>thiết bị</Text>
                        </View>
                    </Pressable>
                </>


            )

    )
}
