import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, FlatList, ActivityIndicator, View, Modal, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';
import PhotoPreview from '../components/PhotoPreview';
import PhotoItem from '../components/PhotoItem';
import { Icon } from 'react-native-elements';

export default function PhotosScreen() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setPhotos(response.data.slice(0, 50)); // Fetch only the first 50 photos
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={photos}
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
  list: {
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
  },
});
