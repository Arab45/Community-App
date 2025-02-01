
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from "react-native";
import Form from "./Component/navigation/customForm";

export default function App() {

  return (
    <SafeAreaView style={styles.header}>
      <StatusBar style="auto" />
    <Form name= "Welcome back"/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  header: {
    flex: 1,
    // backgroundColor: "#5d1ab2",
    // marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});
