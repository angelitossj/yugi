import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, FlatList, ImageBackground, TouchableOpacity, Modal, Button, TextInput } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fetchCartas } from '../components/FetchCartas';

const CartasScreen = ({ navigation }) => {
  const [cartas, setCartas] = useState([]);
  const [selectedCarta, setSelectedCarta] = useState(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    handleButtonPress();
  }, []);

  const handleButtonPress = async () => {
    const cartitas = await fetchCartas();
    setCartas(cartitas);
  };

  const renderCarta = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedCarta(item)} activeOpacity={0.8}>
      <View style={styles.card}>

          <View style={styles.cardImageContainer}>
            <Image source={{ uri: item.imagen }} style={styles.cardImage} />
          </View>
      </View>
    </TouchableOpacity>
  );
  

  const filterCartas = () => {
    return cartas.filter((carta) =>
      carta.nombre.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const eliminarCarta = () => {
    setCartas((prevCartas) => prevCartas.filter((carta) => carta.id !== selectedCarta.id));
    setSelectedCarta(null);
  };

  return (
    <ImageBackground
      source={require('../../assets/yugi.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={{ marginTop: moderateScale(20) }}>
        <Button title="Volver" onPress={() => navigation.navigate('Inicio')} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por nombre"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>
      <FlatList
        data={filterCartas()}
        renderItem={renderCarta}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.cardContainer}
      />

      <Modal visible={selectedCarta !== null} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedCarta && (
              <>
                <Image source={{ uri: selectedCarta.imagen }} style={styles.modalImage} />
                <Text style={styles.modalTitle}>Nombre: {selectedCarta.nombre}</Text>
                <Text style={styles.modalType}>Tipo: {selectedCarta.tipo}</Text>
               
                <TouchableOpacity onPress={eliminarCarta} style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>Eliminar</Text>
                </TouchableOpacity>
              </>
            )}
            <TouchableOpacity onPress={() => setSelectedCarta(null)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  cardContainer: {
    paddingHorizontal: moderateScale(26),
    paddingTop: moderateScale(26),
  },
  card: {
    width: '79%',
    aspectRatio: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: moderateScale(8),
    padding: moderateScale(16),
    marginBottom: moderateScale(16),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  cardImageContainer: {
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: moderateScale(8),
    padding: moderateScale(16),
    alignItems: 'center',
    width: moderateScale(300),
  },

  modalImage: {
    width: moderateScale(200),
    height: moderateScale(200),
    marginBottom: moderateScale(8),
    borderRadius: moderateScale(8),
  },
  modalTitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginBottom: moderateScale(8),
    textAlign: 'center',
  },
  modalType: {
    fontSize: moderateScale(16),
    color: 'black',
    marginBottom: moderateScale(8),
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: moderateScale(16),
    textAlign: 'center',
  },
  closeButton: {
    marginTop: moderateScale(8),
    backgroundColor: 'red',
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
    width: '100%',
  },
  closeButtonText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  deleteButton: {
    marginTop: moderateScale(8),
    backgroundColor: 'red',
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
    width: '100%',
  },
  deleteButtonText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  searchInput: {
    height: moderateScale(40),
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: moderateScale(8),
    marginTop: moderateScale(10),
    paddingHorizontal: moderateScale(10),
  },
});

export default CartasScreen;
