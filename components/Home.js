import { View, Text, Button, StyleSheet, ScrollView, } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.btn}>
      <Button title='Appbar' onPress={() => navigation.navigate('Appbar.Action')}> </Button> 
      <Button title='Avatar'  onPress={() => navigation.navigate('Avatar')}> </Button>
      <Button title='Badge'  onPress={() => navigation.navigate('Badge')}> </Button>
      <Button title='Checkbox' onPress={() => navigation.navigate('Checkbox')}> </Button>
      <Button title='Chip' onPress={() => navigation.navigate('Chip')}> </Button>
      <Button title='Collapse' onPress={() => navigation.navigate('Collapse')}> </Button>
      <Button title='Dialog'  onPress={() => navigation.navigate('Dialog')}> </Button>
      <Button title='Divider'  onPress={() => navigation.navigate('Divider')}> </Button>
      <Button title='Helper Text'  onPress={() => navigation.navigate('HelperText')}> </Button>
      <Button title='Icon Button'  onPress={() => navigation.navigate('IconButton')}> </Button>
      <Button title='List'  onPress={() => navigation.navigate('List')}> </Button>
      <Button title='Menu' onPress={() => navigation.navigate('Menu')}> </Button>
      <Button title='Modal' onPress={() => navigation.navigate('Modal')}> </Button>
      <Button title='Progress Bar'onPress={() => navigation.navigate('ProgressBar')}> </Button>
      <Button title='Radio Button'  onPress={() => navigation.navigate('RadioButton')}> </Button>
      <Button title='Search Bar'  onPress={() => navigation.navigate('SearchBar')}> </Button>
      <Button title='Segmented Buttons'  onPress={() => navigation.navigate('SegmentedButtons')}> </Button>
      <Button title='Snack bar' onPress={() => navigation.navigate('Snackbar')}> </Button>
      <Button title='Switch'  onPress={() => navigation.navigate('Switch')}> </Button>
      <Button title='TextInput'  onPress={() => navigation.navigate('TextInput')}> </Button>
      <Button title='ToggleButton' onPress={() => navigation.navigate('ToggleButton')}> </Button>
      <Button title='TouchableRipple' onPress={() => navigation.navigate('TouchableRipple')}> </Button>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'C0D6E4',
    borderColor: 'black',
  },
  btn: {
    gap: 15,
    backgroundColor: 'C0D6E4',
    borderColor: 'darkblue',
    borderWidth: 5, 
    borderRadius: 10,
    padding: 10,
  },
});


