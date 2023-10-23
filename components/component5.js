import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';

//CHIP

export default function ChipExample() {
  return (
    <View style={styles.container}>
      <Chip style={styles.chip}>Default Chip</Chip>
      <Chip style={styles.outlinedChip} mode="outlined">Outlined Chip</Chip>
      <Chip style={styles.selectedChip} selected>Select Chip</Chip>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chip: {
    margin: 4,
  },
  outlinedChip: {
    margin: 4,
    borderWidth: 1,
    borderColor: 'blue',
  },
  selectedChip: {
    margin: 4,
    backgroundColor: 'green',
    color: 'white',
  },
});
