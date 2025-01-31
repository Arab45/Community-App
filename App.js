import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { images } from "./demoImage/splashImage";
export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <Image source={images.Rectangle} resizeMode="container" style={{colo,  borderWidth: 1, borderColor: 'red', backgroundColor: 'blue'}}/>
        <StatusBar style="auto" />
      </View>''
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // fontSize: 8,
    // fontFamily: "Roboto-Italic-VariableFont_wdth,wght"
  },
});
