import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TermsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.term}>
        <Text style={styles.title}>Điều khoản 1</Text>
        <Text style={styles.content}>Nội dung điều khoản 1...</Text>
      </View>
      <View style={styles.term}>
        <Text style={styles.title}>Điều khoản 2</Text>
        <Text style={styles.content}>Nội dung điều khoản 2...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  term: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default TermsScreen;
