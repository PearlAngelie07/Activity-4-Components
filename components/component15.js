import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function App() {
  const [checked, setChecked] = useState('None');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Civil Status: </Text>
      <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
        <View style={styles.radioButtonContainer}>
          <RadioButton.Item label="Single" value="Single" color="#000" labelStyle={styles.radioButtonLabel} />
          <RadioButton.Item label="Married" value="Married" color="#000" labelStyle={styles.radioButtonLabel} />
          <RadioButton.Item label="Widowed" value="Widowed" color="#000" labelStyle={styles.radioButtonLabel} />
          <RadioButton.Item label="Divorced" value="Divorced" color="#000" labelStyle={styles.radioButtonLabel} />
        </View>
      </RadioButton.Group>
      <Text style={styles.selectedLabel}>Selected: {checked}</Text>
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
    fontSize: 20,
  },
  radioButtonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  radioButtonLabel: {
    fontSize: 16,
  },
  selectedLabel: {
    marginTop: 5,
    fontSize: 18,
  },
});
