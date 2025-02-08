import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Switch,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";

export default function Profile() {
  const [isEnable, setIsEnable] = useState(false);

  const toggleSwitch = () => {
    setIsEnable((previous) => !previous);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.subContainer}>
        <Text style={styles.profileText}>Profile</Text>
      </View>
      <View style={styles.mainProfile}>
        <View style={styles.mainCircle}>
          <View style={styles.circleProfile}>
            <Text style={styles.profileAbr}>ON</Text>
          </View>
        </View>
        <Text style={styles.profileName}>Olayiwola Nurudeen</Text>
        <View style={styles.btnProfile}>
          <Text style={styles.btnText}>Profile</Text>
        </View>
      </View>

      <View style={styles.mainProfileDetails}>
        <View style={styles.notificationConainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="notifications-outline" size={25} color="#333" />
            <Text style={styles.notificationText}>Notification</Text>
          </View>
          <Switch
            value={isEnable}
            onValueChange={toggleSwitch}
            trackColor={{ false: "#fff", true: "#5d1ab2" }}
            thumbColor={ "#fff" }
            ios_backgroundColor="#5d1ab2"
          />
        </View>
        <View style={styles.privacyContainer}>
          <View style={styles.iconContainer}>
            <EvilIcons name="lock" size={30} color="#333" />
            <Text style={styles.privacyText}>Privacy</Text>
          </View>
        </View>
        <View style={styles.deleteContaineer}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="delete-outline"
              size={25}
              color="#333"
            />
            <Text style={styles.deleteText}>Delete account</Text>
          </View>
        </View>
        <View style={styles.logoutContainer}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="logout" size={25} color="#333" />
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.footerSubContainer}>
        <Feather name="home" size={30} color='#5d1ab2' />
          <Entypo name="calendar" size={30} color='#E5E5E5' />
        <EvilIcons name="calendar" size={30} color='#E5E5E5' />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Platform.OS = "android" ? StatusBar.currentHeight : null,
    backgroundColor: "#fff",
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  subContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
  },
  profileText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  mainProfile: {
    alignItems: "center",
    gap: 10,
  },
  mainCircle: {
    backgroundColor: "#5d1ab2",
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  circleProfile: {},
  profileAbr: {
    fontSize: 20,
    color: "#fff",
    // fontWeight: 'bold'
  },
  profileName: {
    fontSize: 20,
    // fontWeight: 'bold'
  },
  btnProfile: {
    backgroundColor: "#5d1ab2",
    width: 100,
    padding: 5,
    borderRadius: 15,
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    // fontWeight: 'bold'
  },
  mainProfileDetails: {
    gap: 5,
  },
  notificationConainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
  },
  privacyContainer: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#fff",
    // borderWidth: 1,
    // borderColor: '#000'
  },
  deleteContaineer: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#fff",
  },
  logoutContainer: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#fff",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  notificationText: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  privacyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  deleteText: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  logoutText: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  footerContainer: {
    alignItems: 'center',
  },
  footerSubContainer: {
    flexDirection: 'row',
    // borderWidth: 1,
    width: 140,
    padding: 8,
    justifyContent: 'space-between',
    borderRadius: 20
  }
});

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SignUp from './Component/navigation/signUp';
// import Login from './Component/navigation/login';
// import Onboarding from './Component/Home/onboardingPage';
// import Splash from './Component/Home/Splash';

// const Stack = createNativeStackNavigator();

// export default function App() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false }}>
//           <Stack.Screen name='Splash' component={Splash} />
//           <Stack.Screen name='SignUp' component={SignUp}/>
//           <Stack.Screen name='Login' component={Login}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
