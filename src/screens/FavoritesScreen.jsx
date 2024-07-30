import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Modal, TouchableOpacity, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import PhotoPreview from '../components/PhotoPreview';
import { Icon } from 'react-native-elements';
import PhotoItem from '../components/PhotoItem';

export default function FavoritesScreen() {
  const favorites = useSelector(state => state.favorites);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  if (favorites.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No favorite photos yet.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PhotoPreview photo={item} onPress={() => openModal(item)} />
        )}
        numColumns={3}
        contentContainerStyle={styles.list}
      />
      {selectedPhoto && (
        <Modal visible={true} transparent={true} onRequestClose={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalBackground}>
              <View style={styles.modalContent}>
                <TouchableOpacity style={styles.backButton} onPress={closeModal}>
                  <Icon name="arrow-left" type="material-community" color="#fff" size={30} />
                </TouchableOpacity>
                <PhotoItem photo={selectedPhoto} />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 100,
    color: '#000',
  },
});
