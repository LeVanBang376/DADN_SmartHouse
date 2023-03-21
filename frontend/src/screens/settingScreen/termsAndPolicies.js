import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const TermAndPolicies = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Điều khoản"
        onPress={() => navigation.navigate('term')}
        icon={<Icon name="file-text-o" size={20} color="white" />}
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainerStyle}
      />
      <Button
        title="Chính sách"
        onPress={() => navigation.navigate('policies')}
        icon={<Icon name="book" size={20} color="white" />}
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  buttonStyle: {
    borderRadius: 10,
    height: 50,
    width: 150,
  },
  buttonContainerStyle: {
    margin: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default TermAndPolicies;
