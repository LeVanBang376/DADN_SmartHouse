import React, { useState, useCallback, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';


export default function Response() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Xin chào, team BestEffort có thể giúp gì cho bạn?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: require('./../../../assets/catFish.jpg'),
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
    const value = newMessages[0].text;
    console.log('Mess: ',value);
    callApi(value);
  }, []);

  const callApi = async value => {
    const res = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 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'
        },
        body: JSON.stringify({
            "model": "text-davinci-003",
            "prompt": value,
            "max_tokens": 1000,
            "temperature": 0
        }),
    });
    const data = await res.json();
    if(data && data.choices && data.choices[0] && data.choices[0].text){
        const value = data.choices[0].text;
        addNewMess(value);
        console.log('Data: ', value);
    }
    else console.log('error');
};

  const addNewMess = data => {
    const newMessage = {
      _id: Math.random(999) + 3,
      text: data,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://bom.so/mW0kNe',
      },
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessage));
  };

  return (
    <SafeAreaView style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});