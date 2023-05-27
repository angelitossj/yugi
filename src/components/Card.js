import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const CardComponent = ({ imageUrl }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      {/* Agrega aquí cualquier otra información de la tarjeta que desees mostrar */}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 4,
  },
  cardImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default CardComponent;
