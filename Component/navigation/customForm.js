import React from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Pressable,
} from "react-native";

export default function Form({ name }) {
  return (
    <View style={styles.header}>
      <View style={styles.triangle}>
        <Text style={styles.TriangleText}>Community App</Text>
      </View>
      <Text style={styles.community}>{name}</Text>
      <View style={styles.General}>
        <View style={styles.mainTextInput}>
          <TextInput style={styles.textBox} placeholder="Email Address" />
          <TextInput style={styles.textBox} placeholder="Password" secureTextEntry={true}/>
          <Pressable style={styles.Button}>
            <Text style={styles.login}>Login</Text>
          </Pressable>
        </View>
        <Text style={styles.footerText}>Forget Password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
    gap: 50,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  triangle: {
    backgroundColor: "#5d1ab2",
    width: "100%",
    height: "40%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  community: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  TriangleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    // marginHorizontal: 10
  },
  textBox: {
    // borderWidth: 1,
    height: 50,
    borderColor: "#000",
    paddingHorizontal: 10,
    backgroundColor: '#ddd'
  },
  mainTextInput: {
    gap: 20,
    // paddingHorizontal: 10,
  },
  footerText: {
    color: "#ddd",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  Button: {
    backgroundColor: "#5d1ab2",
    height: 50,
    justifyContent: "center",
  },
  login: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  General: {
    paddingHorizontal: 20, 
    gap: 10
  }
});
