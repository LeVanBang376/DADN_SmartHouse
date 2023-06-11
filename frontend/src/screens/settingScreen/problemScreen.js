import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function ProblemScreen() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  const toggleTerms = () => {
    setShowTerms(!showTerms);
  };

  const togglePolicy = () => {
    setShowPolicy(!showPolicy);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity style={styles.itemContainer} onPress={toggleTerms}>
          <Text style={styles.itemText}>Cách bật chế độ tự động</Text>
        </TouchableOpacity>
        {showTerms && (
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>
            Cách bật chế độ tự động sẽ được hiển thị ở đây
            </Text>
          </View>
        )}
        <TouchableOpacity style={styles.itemContainer} onPress={togglePolicy}>
          <Text style={styles.itemText}>Cách bật chế độ tự động</Text>
        </TouchableOpacity>
        {showPolicy && (
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>
            Cách bật chế độ tự động sẽ được hiển thị ở đây
            </Text>
          </View>
        )}
        <TouchableOpacity style={styles.itemContainer} onPress={togglePolicy}>
          <Text style={styles.itemText}>Cách kết nối với thiết bị mới</Text>
        </TouchableOpacity>
        {showPolicy && (
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>
            Cách kết nối với thiết bị mới sẽ được hiển thị ở đây
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  itemContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contentText: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
})


