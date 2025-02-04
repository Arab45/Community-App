// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation();

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
  },
  community: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'assets/fonts/Roboto-Italic-VariableFont_wdth,wght',
    color: '#fff'
  }
});
