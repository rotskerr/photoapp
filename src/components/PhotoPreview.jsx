import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const numColumns = 3;
const thumbnailSize = width / numColumns;

export default function PhotoPreview({ photo, onPress }) {
  if (!photo || !photo.thumbnailUrl || !photo.title || !photo.url) {
    console.error("Invalid photo object:", photo);
    return <Text>Invalid photo data</Text>;
  }

  return (
    <TouchableOpacity onPress={() => onPress(photo)}>
      <View style={styles.container}>
        <Image source={{ uri: photo.thumbnailUrl }} style={styles.thumbnail} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnail: {
    width: thumbnailSize,
    height: thumbnailSize,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
