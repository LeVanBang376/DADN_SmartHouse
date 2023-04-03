import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const PoliciesScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.policy}>
        <Icon name='ice-cream-outline' style={styles.icon} />
        <Text style={styles.title}>Chính sách 1: Chính sách bảo mật</Text>
        <Text style={styles.content}>Bảo vệ thông tin cá nhân của người dùng là một ưu tiên hàng đầu. Chính sách bảo mật sẽ xác định cách thức thu thập, sử dụng và bảo mật thông tin cá nhân của người dùng.</Text>
      </View>
      <View style={styles.policy}>
        <Icon name='ice-cream-outline' style={styles.icon} />
        <Text style={styles.title}>Chính sách 2: Chính sách sử dụng</Text>
        <Text style={styles.content}>Chính sách này sẽ quy định các quyền và trách nhiệm của người dùng khi sử dụng ứng dụng. Bao gồm việc sử dụng ứng dụng chỉ để mục đích cá nhân, không được phép sử dụng để vi phạm pháp luật, ...</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  policy: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#d6d6d6',
    borderStyle: 'dashed',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  icon: {
    fontSize: 30,
    color: '#777',
    marginRight: 10,
    marginTop: -10,
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});


export default PoliciesScreen;
