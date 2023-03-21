import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const SECTIONS = [
  {
    header: 'Phản hồi',
    items: [
      { id: 'response', icon: 'flag',color: '#fd2d54', label: 'Phản hồi', type: 'link' },
    ],
  },
  {
    header: 'Trợ giúp',
    items: [
      { id: 'problem', icon: 'file-text',color: '#fe9400', label: 'Các vấn đề thường gặp', type: 'link' },
      { id: 'request', icon: 'message-square',color: '#32c759', label: 'Gửi yêu cầu trợ giúp', type: 'link' },
    ],
  },
];


export default function settingScreen() {

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: '#f6f6f6' }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>

          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur.
          </Text>
        </View> */}

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{header}</Text>
            </View>
            <View style={styles.sectionBody}>
              {items.map(({ id, label, icon,color, type, value }, index) => {
                return (
                  <View
                    key={id}
                    style={[
                      styles.rowWrapper,
                      index === 0 && { borderTopWidth: 0 },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {
                        if (type === 'link') {
                          if (id === 'response') {
                            navigation.navigate('response');
                          } else if (id === 'problem') {
                            navigation.navigate('problemScreen');
                          } else if (id === 'request') {
                            navigation.navigate('requestScreen');
                          }
                          // Add conditions for other links here
                        } else {
                          // Handle other types of components
                        }
                      }}>
                      <View style={styles.row}>
                      <View style={[styles.rowIcon, { backgroundColor: color }]}>
                      <FeatherIcon color="#fff" name={icon} size={18} />
                      </View>

                        <Text style={styles.rowLabel}>{label}</Text>

                        <View style={styles.rowSpacer} />

                        {type === 'select' && (
                          <Text style={styles.rowValue}>{form[id]}</Text>
                        )}

                        {/* {type === 'toggle' && (
                          <Switch
                            onChange={val => setForm({ ...form, [id]: val })}
                            value={form[id]}
                          />
                        )} */}

                        {(type === 'select' || type === 'link') && (
                          <FeatherIcon
                            color="#ababab"
                            name="chevron-right"
                            size={22}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  section: {
    paddingHorizontal: 24,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    color: '#9e9e9e',
    letterSpacing: 1.1,
  },
  
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#0c0c0c',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});