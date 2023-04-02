import React, { useState, useCallback, useEffect } from 'react'
import { SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'

export default function response() {
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
                    avatar: 'https://bom.so/mW0kNe',
                },
            },
        ]);
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        //console.log('Mess: ',messages); => value
        const value = messages[0].text;
        console.log('Mess: ',value);
        callApi(value);
    }, [])

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
        if(data){
            const value = data?.choices[0]?.text;
            addNewMess(value);
            console.log('Data: ', value);
        }
    };

    const addNewMess = (data) =>{
        const value = {
                _id: Math.random(999),
                text: data,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://bom.so/mW0kNe',
                },
        };
        setMessages(previousMessages => GiftedChat.append(previousMessages, value));
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </SafeAreaView>

    )
}
//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 key GPT_Thuyen