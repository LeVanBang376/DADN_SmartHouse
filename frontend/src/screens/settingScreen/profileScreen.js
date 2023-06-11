import React, { useState,useEffect  } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation,useRoute  } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [userData, setUserData] = useState({
    name: 'Nguyễn Mạnh Thuyên',
    phoneNumber: '0123456789',
    avatarUri: 'https://bom.so/mW0kNe',
    dateOfBirth: '01/01/2000',
    email: 'johndoe@gmail.com',
    address: '123 Main Street, Anytown USA',
  });
  useEffect(() => {
    if (route.params?.userData) {
      setUserData(route.params.userData);
    }
  }, [route.params?.userData]);

  const handleEditProfile = () => {
    navigation.navigate('EditProfileScreen', { userData, setUserData });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={require('./../../../assets/catFish.jpg')} />
        <Text style={styles.name}>{userData.name}</Text>
        <Text style={styles.phoneNumber}>{userData.phoneNumber}</Text>
      </View>
      <View style={styles.body}>
      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Thay đổi thông tin</Text>
      </TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.label}>Họ tên:</Text>
          <Text style={styles.value}>{userData.name}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Ngày sinh:</Text>
          <Text style={styles.value}>{userData.dateOfBirth}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{userData.email}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Địa chỉ:</Text>
          <Text style={styles.value}>{userData.address}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    alignItems: "center",
    marginTop: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  phoneNumber: {
    fontSize: 16,
    marginTop: 5,
  },
  body: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  value: {
    fontSize: 16,
    flex: 2,
    textAlign: "right",
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    padding: 6,
    marginTop: -22,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});

export default ProfileScreen;
