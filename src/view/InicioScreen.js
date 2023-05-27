import React, { useState, useRef } from 'react';
import { View, Button, StyleSheet, useWindowDimensions, Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import CartasScreen from './CartasScreen';

const InicioScreen = () => {
  const { width, height } = useWindowDimensions();
  const [mostrarCartas, setMostrarCartas] = useState(false);
  const navigation = useNavigation();
  const videoRef = useRef(null);

  const handleButtonPress = () => {
    setMostrarCartas(true);
  };

  const handleNavigation = () => {
    navigation.navigate('Yugioh');
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={require('../../assets/Download.mp4')} // Ruta del video
        style={[styles.video, { width, height }]}
        resizeMode="cover"
        shouldPlay
        isLooping
      />
      {!mostrarCartas && (
        <View style={styles.overlay}>
          <Button title="Presionar" onPress={handleNavigation} />
        </View>
      )}
      {mostrarCartas && <CartasScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    zIndex: 1,
  },
});

export default InicioScreen;
