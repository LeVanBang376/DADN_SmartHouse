import React, { useState } from 'react'
import { View, Text, Pressable, Modal, SafeAreaView, TextInput } from 'react-native'
import { Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'
import styles from './styles'
import UserAPI from '../../userContext/UserContext'
export default function SensorItem(props) {
    const { message } = React.useContext(UserAPI)
    const [modalVisible, setModalVisible] = useState(false);
    const sensorTypes = ["Nhiệt độ", "Độ ẩm", "Ánh sáng"]
    const [sensorType, setSensorType] = useState("Nhiệt độ")
    React.useEffect(() => {
        if (props.type == 'temp') {
            setSensorType("Nhiệt độ")
        } else if (props.type == 'humid') {
            setSensorType("Độ ẩm")
        } else setSensorType("Ánh sáng")
    }, [props.type])
    return (
        props.addSensor == false ?
            (
                <View style={styles.sensorContainer}>
                    {props.type == 'temp' ?
                        (
                            <FontAwesome5
                                name='temperature-high'
                                size={30}
                                style={styles.icon}
                            />
                        ) :
                        [props.type == 'humid' ?
                            (
                                <Ionicons
                                    name='water-outline'
                                    size={30}
                                    style={styles.icon}
                                />
                            ) :
                            (
                                <Entypo
                                    name='light-up'
                                    size={30}
                                    style={styles.icon}
                                />
                            )
                        ]
                    }
                    <View>
                        {props.type == 'temp' ?
                            (
                                <Text style={styles.sensorName}>Nhiệt độ</Text>
                            ) :
                            [props.type == 'humid' ?
                                (
                                    <Text style={styles.sensorName}>Độ ẩm</Text>
                                ) :
                                (
                                    <Text style={styles.sensorName}>Ánh sáng</Text>
                                )
                            ]
                        }
                        <View style={styles.sensorValue}>
                            {
                                props.type == 'temp' ?
                                    (
                                        <Text style={styles.value}>{message.slice(message.indexOf('TEMP') + 6, message.indexOf(',\"HUMID'))}</Text>
                                    ) :
                                    [props.type == 'humid' ?
                                        (
                                            <Text style={styles.value}>{message.slice(message.indexOf('HUMID') + 7, message.indexOf(',\"LIGHT'))}</Text>
                                        ) :
                                        (
                                            <Text style={styles.value}>{message.slice(message.indexOf('LIGHT') + 7, message.indexOf(',\"RELAY'))}</Text>
                                        )
                                    ]
                            }

                            {props.type == 'temp' ?
                                (
                                    <Text style={styles.unit}>°C</Text>
                                ) :
                                [props.type == 'humid' ?
                                    (
                                        <Text style={styles.unit}>%</Text>
                                    ) :
                                    (
                                        <Text style={styles.unit}>%</Text>
                                    )
                                ]
                            }
                        </View>
                    </View>
                </View>
            ) : (
                <>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Tên cảm biến</Text>
                                    <View style={{ width: 60 }}>
                                        <SafeAreaView>
                                            <TextInput
                                                style={styles.input}
                                            // onChangeText={setHelperDeviceName}
                                            // value={helperDeviceName}
                                            />
                                        </SafeAreaView>
                                    </View>

                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Loại cảm biến</Text>
                                    <SelectDropdown
                                        data={sensorTypes}
                                        onSelect={(selectedItem, index) => {
                                            console.log(selectedItem, index)
                                            setSensorType(selectedItem)
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
                                        rowTextStyle={{ textAlign: 'left', fontSize: 20, paddingLeft: 9 }}
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
                    <Pressable onPress={() => setModalVisible(true)}>
                        <View style={styles.sensorContainer2}>
                            <Text>Thêm cảm biến</Text>
                        </View>
                    </Pressable>

                </>

            )

    )
}
