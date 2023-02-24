import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/Login';
import MyTabs from './routeTabs';

const Stack = createNativeStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        component={LoginScreen}
        name="Login"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={MyTabs}
        name="Main"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default LoginStack;
