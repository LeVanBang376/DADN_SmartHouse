import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const TermScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.policy}>
      <Icon name='logo-electron' style={styles.icon} />
        <Text style={styles.title}>Điều khoản 1: Sử dụng ứng dụng</Text>
        <Text style={styles.content}>Ứng dụng IoT Home được cung cấp cho mục đích sử dụng cá nhân. Bạn có thể sử dụng ứng dụng cho các mục đích cá nhân của bạn và không được phép sử dụng ứng dụng cho mục đích thương mại.</Text>
      </View>
      <View style={styles.policy}>
      <Icon name='logo-electron' style={styles.icon} />
        <Text style={styles.title}>Điều khoản 2: Đăng ký tài khoản</Text>
        <Text style={styles.content}>Để sử dụng ứng dụng, bạn cần đăng ký tài khoản. Bạn phải cung cấp thông tin chính xác và đầy đủ để đăng ký tài khoản. Bạn có trách nhiệm giữ bí mật thông tin đăng nhập của mình và không được chia sẻ thông tin này với bất kỳ ai khác.</Text>
      </View>
      <View style={styles.policy}>
      <Icon name='logo-electron' style={styles.icon} />
        <Text style={styles.title}>Điều khoản 3: Quản lý thiết bị</Text>
        <Text style={styles.content}>Bạn có thể thêm, xóa và quản lý các thiết bị IoT của mình thông qua ứng dụng. Bạn phải tuân thủ các hướng dẫn về sử dụng thiết bị và không được sử dụng thiết bị cho các mục đích bất hợp pháp hoặc gây hại cho người khác</Text>
      </View>
      <View style={styles.policy}>
      <Icon name='logo-electron' style={styles.icon} />
        <Text style={styles.title}>Điều khoản 4: Thay đổi điều khoản</Text>
        <Text style={styles.content}>Chúng tôi có quyền thay đổi điều khoản sử dụng của ứng dụng vào bất cứ lúc nào. Bạn sẽ được thông báo về bất kỳ thay đổi nào và cần đọc và chấp nhận các điều khoản mới trước khi tiếp tục sử dụng ứng dụng.</Text>
      </View>
      <View style={styles.policy}>
      <Icon name='logo-electron' style={styles.icon} />
        <Text style={styles.title}>Điều khoản 5: Giới hạn trách nhiệm</Text>
        <Text style={styles.content}>Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại nào phát sinh từ việc sử dụng ứng dụng IoT Home của bạn.</Text>
      </View>
      <View style={styles.policy}>
      <Icon name='logo-electron' style={styles.icon} />
        <Text style={styles.title}>Điều khoản 6: Giải quyết tranh chấp</Text>
        <Text style={styles.content}>Bất kỳ tranh chấp nào phát sinh từ việc sử dụng ứng dụng IoT Home sẽ được giải quyết thông qua các phương tiện hợp lý như trung tâm giải quyết tranh chấp.</Text>
      </View>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    justifyContent: 'flex-end',
  },
  policy: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#d6d6d6',
    borderStyle: 'dashed',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  icon: {
    fontSize: 30,
    color: '#777',
    marginRight: 10,
    marginTop:-10,
    marginBottom:5,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});


export default TermScreen;
