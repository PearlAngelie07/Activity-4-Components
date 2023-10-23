import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

//COLLAPSE

const CollapseComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapse}>
        <Text style={styles.toggleButton}>Tuploka kung gwapo ka.</Text>
      </TouchableOpacity>
      {isCollapsed ? null : (
        <View style={styles.collapsedContent}>
          <Text>Gituplok lagi nimo Sir.hahha</Text>
          <Text>Unta papasaron mi nimo huhuhu</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 10,
  },
  toggleButton: {
    backgroundColor: '#007AFF',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  collapsedContent: {
    marginTop: 10,
  },
});

export default CollapseComponent;
