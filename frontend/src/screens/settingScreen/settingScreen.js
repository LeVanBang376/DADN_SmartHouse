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
import AuthenticationAPI from '../../userContext/AuthenticationContext';

const SECTIONS = [
  //   {
  //     header: '',
  //     items: [
  //       { id: 'language', icon: 'globe', label: 'Language', type: 'select' },
  //       { id: 'darkMode', icon: 'moon', label: 'Dark Mode', type: 'toggle' },
  //       { id: 'wifi', icon: 'wifi', label: 'Use Wi-Fi', type: 'toggle' },
  //     ],
  //   },
  {
    header: 'Tiện ích',
    items: [
      { id: 'profile', icon: 'flag', color: '#fd2d54', label: 'Thông tin cá nhân', type: 'link' },
      { id: 'keyChange', icon: 'key', color: '#007afe', label: 'Đổi mật khẩu', type: 'link' },
      { id: 'changeTem', icon: 'thermometer', color: '#ff9900', label: 'Ngưỡng nhiệt độ', type: 'link' },
    ],
  },
  {
    header: 'Trợ giúp',
    items: [
      { id: 'help', icon: 'file-text', color: '#fe9400', label: 'Điều khoản và chính sách', type: 'link' },
      { id: 'response', icon: 'message-square', color: '#32c759', label: 'Trợ giúp và phản hồi', type: 'link' },
    ],
  },
  {
    header: 'Lối tắt',
    items: [
      { id: 'logOut', icon: 'log-out', color: '#fe9400', label: 'Đăng xuất', type: 'link' },
    ],
  },
];


export default function SettingScreen() {
  const [form, setForm] = useState({
    language: 'English',
    darkMode: true,
    wifi: false,
  });
  const navigation = useNavigation();
  const { setLogin } = React.useContext(AuthenticationAPI)
  return (
    <SafeAreaView style={{ backgroundColor: '#f6f6f6' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profile}>
          <Image
            alt=""
            source={require('./../../../assets/catFish.jpg')}
            style={styles.profileAvatar}
          />

          <Text style={styles.profileName}>Nguyễn Mạnh Thuyên</Text>

          <Text style={styles.profileEmail}>thuyen.nguyennmt942@hcmut.edu.vn</Text>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{header}</Text>
            </View>
            <View style={styles.sectionBody}>
              {items.map(({ id, label, icon, color, type, value }, index) => {
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
                          if (id === 'profile') {
                            navigation.navigate('profileScreen');
                          } else if (id === 'keyChange') {
                            navigation.navigate('changePassword');
                          } else if (id === 'help') {
                            navigation.navigate('termsAndPolicies');
                          } else if (id === 'response') {
                            navigation.navigate('helpAndResponse');
                          } else if (id === 'logOut') {
                            setLogin(false)
                          }
                          else if (id === 'changeTem') {
                            navigation.navigate('changeTem');
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
    paddingVertical: 24,
  },
  section: {
    paddingHorizontal: 24,
  },
  sectionHeader: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  profile: {
    padding: 24,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatar: {
    width: 150,
    height: 150,
    borderRadius: 9999,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderWidth: 3,
    borderColor: '#fff',
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAction: {
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: '#007bff',
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#414d63',
    textAlign: 'center',
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: '#989898',
    textAlign: 'center',
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