import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

//SEGMENTED BUTTON

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabChange = index => {
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Seasons</Text>
      <SegmentedControlTab
        values={['Season 1', 'Season 2', 'Season 3']}
        selectedIndex={selectedIndex}
        onTabPress={handleTabChange}
        tabsContainerStyle={styles.segmentedControl}
        tabStyle={styles.segmentedTab}
        activeTabStyle={styles.activeSegment}
        tabTextStyle={styles.segmentText}
        activeTabTextStyle={styles.activeSegmentText}
      />
      <Text style={styles.selectedText}>
        Selected Season: {selectedIndex + 1}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  segmentedControl: {
    backgroundColor: 'lightgray',
    borderColor: 'gray',
  },
  segmentedTab: {
    backgroundColor: 'white',
  },
  activeSegment: {
    backgroundColor: 'black',
  },
  segmentText: {
    color: 'black',
    fontWeight:'bold'
  },
  activeSegmentText: {
    color: 'lightblue',
    borderStyle:'dotted',
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    marginRight:10,
  },
});
