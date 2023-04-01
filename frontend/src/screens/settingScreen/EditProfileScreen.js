import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const EditProfileScreen = ({ navigation, route }) => {
  const [fullName, setFullName] = useState(route.params.userData.name);
  const [email, setEmail] = useState(route.params.userData.email);
  const [birthday, setBirthday] = useState(route.params.userData.dateOfBirth);
  const [address, setAddress] = useState(route.params.userData.address);

  const handleSave = () => {
    route.params.setUserData({
      ...route.params.userData,
      name: fullName,
      email: email,
      dateOfBirth: birthday,
      address: address,
    });
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
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
        placeholder="Birthday"
        value={birthday}
        onChangeText={setBirthday}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
