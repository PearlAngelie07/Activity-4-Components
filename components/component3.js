import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Badge, Avatar } from 'react-native-paper';

//BADGE

export default function component1() {
  return (
    <View style={styles.container}>
       <Badge size={30}>3</Badge>
       <Avatar.Icon size={80} icon="folder" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      justifyContent:'center',
      alignSelf:'center'
    },
  });