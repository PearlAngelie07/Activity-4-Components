import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

//SWITCH

export default function App() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setIsSwitchOn(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Toggle the Switch</Text>
      <Switch
        trackColor={{ false: 'red', true: 'green' }}
        thumbColor={isSwitchOn ? 'white' : 'gray'}
        onValueChange={toggleSwitch}
        value={isSwitchOn}
      />
      <Text style={styles.status}>{isSwitchOn ? 'ON' : 'OFF'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  status: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
