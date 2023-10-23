import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { PaperProvider, Provider } from "react-native-paper";
import Home from './components/Home';
import component1 from './components/component1';
import component2 from './components/component2';
import component3 from './components/component3';
import component4 from './components/component4';
import component5 from './components/component5';
import component6 from './components/component6';
import component7 from './components/component7';
import component8 from './components/component8';
import component9 from './components/component9';
import component10 from './components/component10';
import component11 from './components/component11';
import component12 from './components/component12';
import component13 from './components/component13';
import component14 from './components/component14';
import component15 from './components/component15';
import component16 from './components/component16';
import component17 from './components/component17';
import component18 from './components/component18';
import component19 from './components/component19';
import component20 from './components/component20';
import component21 from './components/component21';
import component22 from './components/component22';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Appbar.Action" component={component1} />
    <Stack.Screen name="Avatar" component={component2} />
    <Stack.Screen name="Badge" component={component3} />
    <Stack.Screen name="Checkbox" component={component4} />
    <Stack.Screen name="Chip" component={component5} />
    <Stack.Screen name="Collapse" component={component6} />
    <Stack.Screen name="Dialog" component={component7} />
    <Stack.Screen name="Divider" component={component8} />
    <Stack.Screen name="HelperText" component={component9} />
    <Stack.Screen name="IconButton" component={component10} />
    <Stack.Screen name="List" component={component11} />
    <Stack.Screen name="Menu" component={component12} />
    <Stack.Screen name="Modal" component={component13} />
    <Stack.Screen name="ProgressBar" component={component14} />
    <Stack.Screen name="RadioButton" component={component15} />
    <Stack.Screen name="SearchBar" component={component16} />
    <Stack.Screen name="SegmentedButtons" component={component17} />
    <Stack.Screen name="Snackbar" component={component18} />
    <Stack.Screen name="Switch" component={component19} />
    <Stack.Screen name="TextInput" component={component20} />
    <Stack.Screen name="ToggleButton" component={component21} />
    <Stack.Screen name="TouchableRipple" component={component22} />
    
  </Stack.Navigator>
  </NavigationContainer>
  </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
