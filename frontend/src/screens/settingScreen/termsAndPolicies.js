import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const TermAndPolicies = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Điều khoản"
          onPress={() => navigation.navigate('term')}
          icon={<Icon name="file-text-o" size={20} color="white" />}
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainerStyle}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Chính sách"
          onPress={() => navigation.navigate('policies')}
          icon={<Icon name="book" size={20} color="white" />}
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainerStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
    borderRadius: 30,
    overflow: 'hidden',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
  },
  buttonStyle: {
    borderRadius: 30,
    height: 60,
  },
  buttonContainerStyle: {
    borderRadius: 30,
    overflow: 'hidden',
  },
});

export default TermAndPolicies;
