import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//DIVIDER

const Divider = () => {
  return (
    <View style={styles.divider} />
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Naruto Shippuden : Season 1</Text>
      <Divider />

      <Text>Naruto Shippuden : Season 2</Text>
      <Divider />

      <Text>Naruto Shippuden : Season 3</Text>
      <Divider />

      <Text>Naruto Shippuden : Season 4</Text>
      <Divider />

      <Text>Naruto Shippuden : Season 5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#000',
    width: '80%',
    marginVertical: 10,
  },
});

export default App;
