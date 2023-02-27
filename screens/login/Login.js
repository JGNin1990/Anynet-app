import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import gStyles from '../../globalStyle';
import {useNavigation} from '@react-navigation/native';
// import background from '../assets/images/background.png'

const LoginScreen = () => {
  const navigation = useNavigation();
  const loginHandle = () => {
    navigation.navigate('Main');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require('../../asset/images/background.png')}
        style={gStyles.fBgImg}>
        <View style={styles.logoContainer}>
          <Image source={require('../../asset/images/logo1.png')} />
        </View>
        <View style={styles.loginContainer}>
          <View>
            <Text style={{fontSize: 28, color: 'black', fontWeight: '600'}}>
              Welcome Back!
            </Text>
            <Text style={{fontSize: 16}}>Login to your existant account .</Text>
          </View>
          <View style={{width: '100%'}}>
            <TextInput placeholder="Enter Phone Number" style={styles.input} />
            <TextInput placeholder="Enter Password" style={styles.input} />
            <TouchableOpacity style={gStyles.cButtom} onPress={loginHandle}>
              <Text style={{textAlign: 'center', fontSize: 16, color: 'white'}}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPws')}
              style={{marginTop: 40}}>
              <Text
                style={{textAlign: 'center', fontSize: 15, color: '#BAD7E9'}}>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  loginContainer: {
    paddingHorizontal: 30,
    alignItems: 'flex-start',
    marginTop: 80,
  },
  input: {
    marginTop: 20,
    fontSize: 15,
    paddingHorizontal: 20,
    borderWidth: 1.5,
    borderRadius: 10,
  },
});
