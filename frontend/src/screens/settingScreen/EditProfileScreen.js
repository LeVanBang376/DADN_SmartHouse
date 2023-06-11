import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';

const EditProfileScreen = ({ navigation, route }) => {
  const [fullName, setFullName] = useState(route.params.userData.name);
  const [email, setEmail] = useState(route.params.userData.email);
  const [birthday, setBirthday] = useState(route.params.userData.dateOfBirth);
  const [address, setAddress] = useState(route.params.userData.address);

  const handleSave = () => {
    Alert.alert(
      'Xác nhận',
      'Bạn có chắc chắn muốn lưu thay đổi?',
      [
        { text: 'Huỷ bỏ', style: 'cancel' },
        { text: 'Đồng ý', onPress: saveChanges },
      ]
    );
  };

  const saveChanges = () => {
    route.params.setUserData({
      ...route.params.userData,
      name: fullName,
      email: email,
      dateOfBirth: birthday,
      address: address,
    });

    Alert.alert(
      'Thành công',
      'Thay đổi đã được lưu thành công',
      [{ text: 'OK', onPress: navigation.goBack }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Chỉnh sửa hồ sơ</Text>
      <TextInput
        style={styles.input}
        placeholder="Họ và tên"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Ngày sinh"
        value={birthday}
        onChangeText={setBirthday}
      />
      <TextInput
        style={styles.input}
        placeholder="Địa chỉ"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Lưu thay đổi" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default EditProfileScreen;
