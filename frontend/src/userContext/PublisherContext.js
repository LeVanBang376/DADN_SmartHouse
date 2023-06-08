import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import init from 'react_native_mqtt';
init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: false,
    sync: {}
});
const PublisherAPI = React.createContext()
export function PublisherContext({ children }) {
    function onConnectPublish() {
        console.log("Publisher: onConnect");

    }
    function onConnectionLostPublish(responseObject) {
        if (responseObject.errorCode !== 0) {
            console.log("Publisher onConnectionLost:" + responseObject.errorMessage);

        }
    }
    var clientPublish = new Paho.MQTT.Client('broker.hivemq.com', 8000, "Publisher:" + Math.round(Math.random(100000000, 1000000000) * 1000000000));
    clientPublish.connect({ onSuccess: onConnectPublish, useSSL: false });
    clientPublish.onConnectionLost = onConnectionLostPublish;
    
    const updateHistory = async (command) => {
        // Lấy lịch sử từ AsyncStorage
        let history = await AsyncStorage.getItem('history') || '[]';
        history = JSON.parse(history);
        
        // Thêm thông tin mới vào lịch sử
        history.push({ command: command, time: new Date() });
        
        // Lưu lịch sử mới vào AsyncStorage
        await AsyncStorage.setItem('history', JSON.stringify(history));
    };
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
    )
}
export default PublisherAPI
