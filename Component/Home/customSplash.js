import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function Splash({ image, imageText }) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={image} />
        <Text style={styles.imageText}>{imageText}</Text>
      </View>

      <View>
        <Pressable>
          <Text></Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
