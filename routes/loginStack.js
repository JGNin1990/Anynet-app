import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPws from '../screens/login/ForgotPws';
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
      <Stack.Screen
        component={ForgotPws}
        name="ForgotPws"
        options={{
          headerTitle: 'Update Your Password',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#2B3467'},
        }}
      />
    </Stack.Navigator>
  );
}

export default LoginStack;
