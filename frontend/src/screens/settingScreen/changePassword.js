import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [checkPassword, setCheckPassWord] = useState('thuyen');
    const [showCurrentPassword, setShowCurrentPassword] = useState(true);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

    const handleSaveChanges = () => {
        // Code to handle saving changes
        console.log('Current Password:', currentPassword);
        console.log('New Password:', newPassword);
        console.log('Confirm New Password:', confirmNewPassword);
        if (!currentPassword || !newPassword || !confirmNewPassword) {
            Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin');
            return;
        }
        //Kiểm tra mật khẩu cũ có đúng không
        if (currentPassword !== checkPassword) {
            Alert.alert('Lỗi', 'Mật khẩu cũ không đúng');
            return;
        }

        // Kiểm tra mật khẩu mới và xác nhận lại mật khẩu mới có giống nhau hay không
        if (newPassword !== confirmNewPassword) {
            Alert.alert('Lỗi', 'Mật khẩu mới và xác nhận lại mật khẩu mới không giống nhau');
            return;
        }
        
        // Hiển thị thông báo thành công
        setCheckPassWord(newPassword);
        Alert.alert('Thành công', 'Đổi mật khẩu thành công');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
        //console.log(changePassword);
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Mật khẩu hiện tại của bạn</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={!showCurrentPassword}
                        value={currentPassword}
                        onChangeText={setCurrentPassword}
                    />
                    <TouchableOpacity
                        style={styles.showHideButton}
                        onPress={() => setShowCurrentPassword(!showCurrentPassword)}
                    
                    >
                        <Ionicons
                            name={showCurrentPassword ? 'eye-off' : 'eye'}
                            size={24}
                            color="gray"
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.label}>Mật khẩu mới</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={!showNewPassword}
                        value={newPassword}
                        onChangeText={setNewPassword}
                    />
                    <TouchableOpacity
                        style={styles.showHideButton}
                        onPress={() => setShowNewPassword(!showNewPassword)}
                    >
                        <Ionicons
                            name={showNewPassword ? 'eye-off' : 'eye'}
                            size={24}
                            color="gray"
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.label}>Nhập lại mật khẩu mới</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={!showConfirmNewPassword}
                        value={confirmNewPassword}
                        onChangeText={setConfirmNewPassword}
                    />
                    <TouchableOpacity
                        style={styles.showHideButton}
                        onPress={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                    >
                        <Ionicons
                            name={showConfirmNewPassword ? 'eye-off' : 'eye'}
                            size={24}
                            color="gray"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
                <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChangePassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        padding: 10,
    },
    showHideButton: {
        padding: 10,
    },
    button: {
        backgroundColor: '#008CBA',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
    successText: {
        color: 'green',
        marginTop: 5,
    },
});
