import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ProgressBar, MD3Colors } from 'react-native-paper';

//PROGRESS BAR

export default function component11() {
  return (
    <View style={styles.container}>
        <Text style={styles.lbl}>Loading . . . . PLEASE WAIT</Text>
       <ProgressBar progress={0.9} color={MD3Colors.error10} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        gap: 15,
        paddingTop: 30,
      },

      lbl:{
        fontWeight: 'bold',
        fontSize: 15,
      }
  });
