import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const ForgotPws = () => {
  return (
    <View style={[styles.forp]}>
      <View style={{marginHorizontal: 15}}>
        <View style={{marginTop: 50}}>
          <Text style={{fontSize: 22, fontWeight: '500', color: '#2B3467'}}>
            Forgot Password ?
          </Text>
          <Text style={{fontSize: 16, fontWeight: '500', paddingTop: 15}}>
            We will send You the 4 digit verification code.
          </Text>
          <TextInput placeholder="Enter Old Password" style={styles.forInput} />

          {/* for btn */}
          <TouchableOpacity>
            <View style={styles.forbtn}>
              <Text style={{textAlign: 'center', fontSize: 16, color: 'white'}}>
                GET OTP
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPws;

const styles = StyleSheet.create({
  forp: {
    flex: 1,
    backgroundColor: 'white',
  },
  forInput: {
    // color: '#2B3467',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingHorizontal: 15,
    marginTop: 30,
    borderRadius: 10,
    fontSize: 15,
  },
  forbtn: {
    backgroundColor: '#EB455F',
    textAlign: 'center',
    // marginHorizontal: 20,
    fontWeight: '500',
    padding: 12,
    borderRadius: 12,
    marginTop: 30,
    justifyContent: 'center',
  },
});
