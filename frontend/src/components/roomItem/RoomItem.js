import React, { useState } from 'react'
import { View, Text, Pressable, Modal, SafeAreaView, TextInput } from 'react-native'
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'
import styles from './styles'
export default function RoomItem(props) {
    const [changeRoomModalVisible, setChangeRoomModalVisible] = useState(false);
    const [addRoomModalVisible, setAddRoomModalVisible] = useState(false);
    const roomTypes = ["Trung tâm", "Phòng khách", "Phòng ngủ", "Phòng bếp", "Phòng tắm"]
    const [roomName, setRoomName] = useState(props.name)
    const [roomType, setRoomType] = useState(roomTypes[0])
    React.useEffect(() => {
        if (props.type == 'home') {
            setRoomType("Trung tâm")
        }
        else if (props.type == 'kitchen') {
            setRoomType("Phòng bếp")
        } else if (props.type == 'livingRoom') {
            setRoomType("Phòng khách")
        } else if (props.type == "bedroom") {
            setRoomType("Phòng ngủ")
        } else setRoomType("Phòng tắm")
    }, [props.type])
    return (
        props.addRoom == false ?
            (
                <>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={changeRoomModalVisible}
                        onRequestClose={() => {
                            setChangeRoomModalVisible(!changeRoomModalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Tên phòng</Text>
                                    <View style={{ width: 60 }}>
                                        <SafeAreaView>
                                            <TextInput
                                                style={styles.input}
                                                onChangeText={setRoomName}
                                                value={roomName}
                                            />
                                        </SafeAreaView>
                                    </View>

                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Loại phòng</Text>
                                    <SelectDropdown
                                        data={roomTypes}
                                        defaultValue={roomType}
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
                                        rowTextStyle={{ textAlign: 'left', fontSize: 20, paddingLeft: 9 }}
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
                                            onPress={() => setChangeRoomModalVisible(!changeRoomModalVisible)}>
                                            <Text style={styles.textStyle}>Hủy bỏ</Text>
                                        </Pressable>
                                    </View>
                                    <View >
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setChangeRoomModalVisible(!changeRoomModalVisible)}>
                                            <Text style={styles.textStyle}>Đồng ý</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </Modal>
                    <View style={styles.roomItemContainer}>
                        <View style={styles.iconContainer}>
                            {props.type == 'kitchen' ?
                                (
                                    <MaterialIcons
                                        name='kitchen'
                                        size={40}
                                        style={styles.iconLeft}
                                    />
                                ) :
                                [props.type == 'bedroom' ?
                                    (
                                        <Ionicons
                                            name='bed-outline'
                                            size={40}
                                            style={styles.iconLeft}
                                        />
                                    ) :
                                    (
                                        <Ionicons
                                            name='home-outline'
                                            size={40}
                                            style={styles.iconLeft}
                                        />
                                    )

                                ]
                            }
                            <Pressable onPress={() => setChangeRoomModalVisible(true)}>
                                <FontAwesome
                                    name='pencil-square-o'
                                    size={25}
                                    style={styles.iconRight}
                                />
                            </Pressable>

                        </View>
                        <Text style={styles.roomName}>{props.name}</Text>
                    </View>
                </>
            ) : (
                <>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={addRoomModalVisible}
                        onRequestClose={() => {
                            setAddRoomModalVisible(!addRoomModalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Tên phòng</Text>
                                    <View style={{ width: 60 }}>
                                        <SafeAreaView>
                                            <TextInput
                                                style={styles.input}
                                            // onChangeText={setHelperDeviceName}
                                            // value={helperDeviceName}
                                            />
                                        </SafeAreaView>
                                    </View>

                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Loại phòng</Text>
                                    <SelectDropdown
                                        data={roomTypes}
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
                                            onPress={() => setAddRoomModalVisible(!addRoomModalVisible)}>
                                            <Text style={styles.textStyle}>Hủy bỏ</Text>
                                        </Pressable>
                                    </View>
                                    <View >
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setAddRoomModalVisible(!addRoomModalVisible)}>
                                            <Text style={styles.textStyle}>Đồng ý</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>

                    <Pressable onPress={() => setAddRoomModalVisible(true)}>
                        <View style={styles.roomItemContainer2}>
                            <Text style={styles.roomName2}>Thêm phòng</Text>
                        </View>
                    </Pressable>

                </>
            )
    )
}
