import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MQTT from 'mqtt';

const PublisherAPI = React.createContext();

export function PublisherContext({ children }) {
  const clientPublish = MQTT.connect('mqtt://broker.hivemq.com:8000', {
    clientId: 'Publisher:' + Math.round(Math.random() * 1000000000),
    protocol: 'mqtt',
    connectTimeout: 5000,
  });

  const onConnectPublish = () => {
    console.log('Publisher: onConnect');
  };

  const onConnectionLostPublish = (responseObject) => {
    if (responseObject.errorCode !== 0) {
      console.log('Publisher onConnectionLost:' + responseObject.errorMessage);
    }
  };

  clientPublish.on('connect', onConnectPublish);
  clientPublish.on('reconnect', onConnectPublish);
  clientPublish.on('error', (err) => {
    console.log('error', err);
  });
  clientPublish.on('offline', () => {
    console.log('offline');
  });
  clientPublish.on('close', () => {
    console.log('close');
  });
  clientPublish.on('disconnect', () => {
    console.log('disconnect');
  });
  clientPublish.on('end', () => {
    console.log('end');
  });
  clientPublish.on('message', (topic, message) => {
    console.log('received message', topic, message.toString());
  });
  clientPublish.on('reconnect', (error) => {
    console.log('reconnect', error);
  });
  clientPublish.on('offline', () => {
    console.log('offline');
  });
  clientPublish.on('error', (error) => {
    console.log('error', error);
  });

  const publishCommand = async (command) => {
    try {
      // Gọi hàm publish để gửi yêu cầu điều khiển thiết bị lên MQTT broker
      clientPublish.publish('smart_home_command', command);
      console.log(command);

      // Thêm thông tin mới vào lịch sử
      const historyItem = { command: command, time: new Date() };
      const storedHistory = await AsyncStorage.getItem('history');
      let history = storedHistory ? JSON.parse(storedHistory) : [];
      history.unshift(historyItem);

      // Giới hạn lịch sử tối đa 50 phần tử
      history = history.slice(0, 50);

      // Lưu lịch sử mới vào AsyncStorage
      await AsyncStorage.setItem('history', JSON.stringify(history));
    } catch (error) {
      console.error('Failed to publish command', error);
    }
  };

  return (
    <PublisherAPI.Provider value={{ publishCommand }}>
      {children}
    </PublisherAPI.Provider>
  );
}

export default PublisherAPI;
