import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

//APP BAR

const AppBarExample = () => {
  return (
    <View style={{ flex: 1 }}>
      
      <Appbar.Header style={styles.appBar}>
        <Appbar.Action icon="menu" onPress={() => console.log('Menu pressed')} />
        <Appbar.Content title="My App" subtitle="Welcome to my app" />
        <Appbar.Action icon="bell" onPress={() => console.log('Bell icon pressed')} />
      </Appbar.Header>

      
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#3498db',
  },
});

export default AppBarExample;
