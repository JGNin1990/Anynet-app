import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import LoginStack from './routes/loginStack';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#2B3467" />
      <LoginStack />
    </NavigationContainer>
  );
};

export default App;
