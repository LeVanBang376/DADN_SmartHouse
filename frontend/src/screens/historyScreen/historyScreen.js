import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import PublisherAPI from '../../userContext/PublisherContext';
import { ScrollView } from 'react-native';
function HistoryScreen() {
    const [history, setHistory] = useState([]);
  
    useEffect(() => {
        async function fetchHistory() {
          const storedHistory = await AsyncStorage.getItem('history');
          if (storedHistory) {
            const parsedHistory = JSON.parse(storedHistory);
            // sort the history by time in descending order
            parsedHistory.sort((a, b) => new Date(b.time) - new Date(a.time));
            setHistory(parsedHistory);
          }
        }
        fetchHistory();
      }, []);
      
  
    return (
        <View style={styles.container}>
          <View style={styles.textContainer}>
                <Text>Lịch sử bật tắt thiết bị</Text>
        </View>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {history.map((item, index) => {
              const commandObj = JSON.parse(item.command)
              const ID = commandObj.ID
              const RELAY = commandObj.RELAY
              const VALUE = commandObj.VALUE
              return (
                <View key={index} style={styles.item}>
                  <Text style={styles.deviceId}>Loại phòng: {ID === 0 ? 'Trung tâm' : ID === 1 ? 'Phòng bếp' : ID === 2 ? 'Phòng ngủ' : ID}</Text>
                  <Text style={styles.deviceAction}>Tên thiết bị: {RELAY === 0 ? 'Bóng đèn' : RELAY === 1 ? 'Quạt' : RELAY}</Text>
                  {/* <Text style={styles.deviceAction}>Device RELAY: {RELAY}</Text> */}
                  <Text style={styles.deviceAction}>Trạng thái: {VALUE ? 'Bật' : 'Tắt'}</Text>
                  <Text style={styles.time}>Thời gian: {new Date(item.time).toLocaleString()}</Text>
                </View>
              )
            })}
          </ScrollView>
        </View>
    );    
  }
  
  export default function HistoryScreenWithContext(props) {
    return (
      <PublisherAPI.Consumer>
        {(context) => <HistoryScreen {...props} publishCommand={context.publishCommand} />}
      </PublisherAPI.Consumer>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    item: {
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 5,
      marginHorizontal: 10,
      borderRadius: 5,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    deviceId: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
    deviceAction: {
      textTransform: 'capitalize',
      marginBottom: 5,
    },
    time: {
      fontStyle: 'italic',
    },
  });
  