import React from 'react';
import Paho from 'paho-mqtt';

const SubscriberAPI = React.createContext();

export function SubscriberContext({ children }) {
  const [history, setHistory] = React.useState([]);

  function onConnect() {
    console.log('Subscriber: onConnect');
  }

  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log('Subscriber onConnectionLost:', responseObject.errorMessage);
    }
  }

  function onMessageArrived(message) {
    console.log('Message arrived:', message.payloadString);
    // Parse the message and update the history
    const data = JSON.parse(message.payloadString);
    setHistory((prevHistory) => [...prevHistory, data]);
  }

  var client = new Paho.MQTT.Client('broker.hivemq.com', 8000, 'Subscriber:' + Math.random());
  client.connect({ onSuccess: onConnect, useSSL: false });
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  client.subscribe('smart_home_history', { qos: 0 });

  return (
    <SubscriberAPI.Provider value={{ history }}>
      {children}
    </SubscriberAPI.Provider>
  );
}

export default SubscriberAPI;
