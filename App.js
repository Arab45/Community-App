import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Component/navigation/signUp';
import Login from './Component/navigation/login';
import Onboarding from './Component/Home/onboardingPage';
import Splash from './Component/Home/Splash';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false }}>
          <Stack.Screen name='Splash' component={Splash} />
          <Stack.Screen name='SignUp' component={SignUp}/>
          <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
