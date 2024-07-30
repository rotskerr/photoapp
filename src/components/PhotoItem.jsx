import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, Icon } from "react-native-elements";
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/actions';

export default function PhotoItem({ photo, onPress }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const isFavorite = favorites.some((fav) => fav.id === photo.id);
  const [liked, setLiked] = useState(isFavorite);

  useEffect(() => {
    setLiked(isFavorite);
  }, [isFavorite]);

  if (!photo || !photo.thumbnailUrl || !photo.title || !photo.url) {
    console.error("Invalid photo object:", photo);
    return <Text>Invalid photo data</Text>;
  }

  const toggleLike = () => {
    if (liked) {
      dispatch(removeFavorite(photo));
    } else {
      dispatch(addFavorite(photo));
    }
    setLiked(!liked);
  };

  return (
    <Card containerStyle={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: photo.url }}
          style={styles.image}
        />
        <Icon
          name="heart"
          type="font-awesome"
          color={liked ? "red" : "black"}
          containerStyle={styles.heartIcon}
          onPress={toggleLike}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{photo.title}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300, 
    height: 350,
    padding: 0,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 250, 
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", 
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  footer: {
    height: 100, 
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  footerText: {
    fontSize: 16,
    textAlign: "center",
  },
});