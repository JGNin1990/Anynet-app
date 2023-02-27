import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddCustomer from '../screens/addCustomer/AddCustomer';
import HomeScreen from '../screens/home/Home';
import Info from '../screens/Info/Info';
import Lists from '../screens/lists/Lists';
import Ant from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import InfoStack from './infoStack';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // tabBarLabelStyle: {color: 'white'},
        tabBarActiveTintColor: 'black',
        tabBarActiveBackgroundColor: '#BAD7E9',
        tabBarLabelPosition: 'beside-icon',
        tabBarItemStyle: {
          borderRadius: 25,
        },
      }}>
      <Tab.Screen
        // options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Main',
          tabBarIcon: ({color, size}) => (
            <Ant name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Lists"
        component={Lists}
        options={{
          headerShown: false,
          tabBarLabel: 'Lists',
          tabBarIcon: ({color, size}) => (
            <Icon name="list-ul" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddCustomer}
        options={{
          headerShown: false,
          tabBarLabel: 'Add',
          tabBarIcon: ({color, size}) => (
            <Ant name="adduser" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={InfoStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Info',
          tabBarIcon: ({color, size}) => (
            <Icon name="user-circle-o" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
