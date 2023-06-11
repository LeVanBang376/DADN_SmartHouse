import { setStatusBarBackgroundColor } from "expo-status-bar";
import * as React from "react";
import { Text, View, SafeAreaView, ScrollView, Pressable } from "react-native";
import HistoryItem from "../../components/historyItem/HistoryItem";
import ActivityListAPI from "../../userContext/ActivityContext";
import styles from "./styles";

export default function History({ navigation }) {
    const { activityList, count, setCount } = React.useContext(ActivityListAPI)
    return (
        <View>
            <View style={styles.firstContainer}>
                <Text style={{ fontSize: 18, margin: 12, marginBottom: 0, marginLeft: 20 }}>Lịch sử bật tắt thiết bị</Text>
                <Text style={{ color: 'gray', marginLeft: 20, marginRight: 20, marginBottom: 8 }}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
                <SafeAreaView style={{ height: 651 }}>
                    <ScrollView>
                        {
                            activityList.slice(0, count).map((act, number) => (
                                <HistoryItem key={number} roomName={act.roomName} deviceName={act.deviceName} deviceState={act.state} date={act.date} month={act.month} year={act.year} hour={act.hour} minute={act.minute} second={act.second} />
                            ))

                        }
                        <Pressable onPress={() => setCount(previousCount => previousCount + 10)}>
                            <Text style={{ fontSize: 18, marginBottom: 20, marginTop: 10, textAlign: "center", color: 'blue' }}>Xem thêm 10 hoạt động</Text>
                        </Pressable>
                    </ScrollView>

                </SafeAreaView>

            </View>
        </View>
    )
}

