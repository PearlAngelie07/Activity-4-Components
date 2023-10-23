import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

//TOGGLE BUTTON

export default function App() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleButton = () => {
    setIsToggled(!isToggled);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          isToggled ? styles.buttonActive : styles.buttonInactive,
        ]}
        onPress={toggleButton}
      >
        <Text style={styles.buttonText}>
          {isToggled ? 'ON' : 'OFF'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: 'green',
  },
  buttonInactive: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
