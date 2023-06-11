import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,ScrollView} from 'react-native';


const requestScreen = () => {
   // tabBarOptions.keyboardHidesTabBar = false;
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
 
   const handleSubmit = () => {
    const data = {
      title: title,
      content: content,
    };
  
    fetch('http://172.20.5.41:3000/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})

      .then(response => response.json())
      .then(result => {
        console.log(result.message);
        // Xử lý các hành động khác sau khi gửi email thành công
      })
      .catch(error => {
        console.error('Email failed to send:', error);
        // Xử lý các hành động khác khi gửi email thất bại
      });
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gửi yêu cầu trợ giúp</Text>
      <Text style={styles.subtitle}>Xin vui lòng nhập tiêu đề và nội dung yêu cầu của bạn</Text>
      <TextInput
        style={styles.input}
        placeholder="Tiêu đề"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Nội dung"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Gửi yêu cầu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    justifyContent: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default requestScreen;

