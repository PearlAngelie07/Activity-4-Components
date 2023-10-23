import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';

//SEARCH BAR

export default function component13() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
  
  return (
    <View style={styles.container}>
    <Searchbar
    placeholder="Search Conversation"
    onChangeText={onChangeSearch}
    value={searchQuery}
  />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:10,
        margin:10,
        borderRadius:100,
    },
  });
