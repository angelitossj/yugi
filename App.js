import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InicioScreen from './src/view/InicioScreen';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from "./src/components/Navbar"
export default function App() {
  return (

    <NavigationContainer>
        <Navbar/>     
    <View >
    </View>

    </NavigationContainer>
    
  );
}


