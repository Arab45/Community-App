// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from "react-native";


export default function App() {

  return (
    <SafeAreaView style={styles.header}>
      <StatusBar style="auto" />
      <Text style={styles.community}>Community App</Text>
    </SafeAreaView>
  );
}

const height = Dimensions.get('window').height;
console.log(height);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#5d1ab2",
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : null,
    alignItems: 'center',
    justifyContent: 'center'
  },
  community: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'assets/fonts/Roboto-Italic-VariableFont_wdth,wght',
    color: '#fff'
  }
});
