import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';

//TEXT INPUT

export default function component17() {
    const [text, setText] = React.useState("");
    const [pass, setPass] = React.useState("");

  return (
    <View style={styles.container}>
    <TextInput
      label="Username: "
      value={text}
      onChangeText={text => setText(text)}
    />
    <TextInput
      label="Password: "
      value={pass}
      onChangeText={pass => setPass(pass)} 
      secureTextEntry
      right={<TextInput.Icon icon="eye" />}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 10,
      },
  });
