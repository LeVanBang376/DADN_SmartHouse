import React, { useState } from 'react';
import { View, Text, Slider, StyleSheet, TextInput, Button } from 'react-native';

export default function TemperatureScreen({ navigation }) {
  const [temperature, setTemperature] = useState(0);
  const [inputTemperature, setInputTemperature] = useState('');

  const handleTemperatureChange = value => {
    setTemperature(value);
    setInputTemperature(String(value));
  };

  const handleSave = () => {
    console.log('Nhiệt độ đã được lưu:', temperature);
    navigation.goBack();
  };

  const handleInputChange = text => {
    setInputTemperature(text);
    const parsedTemperature = parseFloat(text);
    if (!isNaN(parsedTemperature)) {
      setTemperature(parsedTemperature);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ngưỡng nhiệt độ hiện tại:</Text>
      <Text style={styles.temperatureText}>{temperature}°C</Text>
      <Slider
        style={styles.slider}
        minimumValue={-100}
        maximumValue={300}
        step={1}
        value={temperature}
        onValueChange={handleTemperatureChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập nhiệt độ"
        value={inputTemperature}
        onChangeText={handleInputChange}
        keyboardType="numeric"
      />
      <Button title="Lưu" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 24
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  temperatureText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  slider: {
    width: '100%',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
