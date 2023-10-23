import React, { useState } from 'react';
import { View, Text, CheckBox, StyleSheet } from 'react-native';

//CHECKBOX

export default function App() {
  const [items, setItems] = useState([
    { id: 1, label: 'Cellphone', isChecked: false },
    { id: 2, label: 'Computer', isChecked: false },
    { id: 3, label: 'TV', isChecked: false },
    { id: 4, label: 'Tablet', isChecked: false },
    { id: 5, label: 'Laptop', isChecked: false },
  ]);

  const toggleCheckBox = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <CheckBox
            value={item.isChecked}
            onValueChange={() => toggleCheckBox(item.id)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginLeft: 10,
    fontSize: 18,
  },
  checkbox: {
    transform: [{ scale: 1.2 }],
    borderRadius: 5,
  },
});
