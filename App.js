import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Switch
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Profile() {
  const [ isEnable, setIsEnable ] = useState(false);

  const toggleSwitch = () => {
    setIsEnable((previous) => !previous);
  }

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
      <Icon name="comments" size={30} color="blue" solid/>;
      <View>
        <View style={styles.notificationConainer}>
          <Text>Notification</Text>
          <Switch
          value={isEnable}
          onValueChange={toggleSwitch}
          trackColor={{false : '#fff', true: '#5d1ab2'}}
          thumbColor= { isEnable ? '#fff' : '#000'}
           ios_backgroundColor="#3e3e3e"
           />
        </View>
        <View></View>
        <View></View>
        <View></View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Platform.OS = "android" ? StatusBar.currentHeight : null,
    backgroundColor: "#fff",
  },
  subContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
  },
  profileText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20
  },
  mainProfile: {
    alignItems: 'center',
    gap: 10
  },
  mainCircle: {
    backgroundColor: '#5d1ab2',
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  circleProfile: {},
  profileAbr: {
    fontSize: 20,
    color: '#fff'
    // fontWeight: 'bold'
  },
  profileName: {
    fontSize: 20,
    // fontWeight: 'bold'
  },
  btnProfile: {
    backgroundColor: '#5d1ab2',
    width: 100,
    padding: 5,
    borderRadius: 15,
  },
  btnText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff'
    // fontWeight: 'bold'
  },
  notificationConainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
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
