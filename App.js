import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Component/navigation/signUp';
import Login from './Component/navigation/login';

const Stack = createNativeStackNavigator();


export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SignUp' screenOptions={{headerShown: false }}>
          <Stack.Screen name='SignUp' component={SignUp}/>
          <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  