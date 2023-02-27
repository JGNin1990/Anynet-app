import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChangePassword from '../screens/Info/ChangePassword';
import Info from '../screens/Info/Info';
import UpdateAccount from '../screens/Info/UpdateAccount';

const Stack = createNativeStackNavigator();

function InfoStack() {
  return (
    <Stack.Navigator initialRouteName="MainInfo">
      <Stack.Screen
        component={Info}
        name="MainInfo"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={UpdateAccount}
        name="UpdateAcc"
        options={{
          headerStyle: {
            backgroundColor: '#2B3467',
          },
          headerTintColor: '#ffff',
          headerTitle: 'Edit Profile',
        }}
      />
      <Stack.Screen
        component={ChangePassword}
        name="ChangePws"
        options={{
          headerTitle: 'Update Your Password',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#2B3467'},
        }}
      />
    </Stack.Navigator>
  );
}

export default InfoStack;
