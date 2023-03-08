import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import LoginStack from './routes/loginStack';
import {Provider} from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar backgroundColor="#2B3467" />
        <LoginStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
