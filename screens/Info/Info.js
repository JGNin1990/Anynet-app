import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import gStyles from '../../globalStyle';
import FAS from 'react-native-vector-icons/FontAwesome';

const Info = ({navigation}) => {
  const logoutHandle = () => {
    navigation.navigate('Login');
  };
  return (
    <ImageBackground
      source={require('../../asset/images/background.png')}
      style={gStyles.fBgImg}>
      <View style={gStyles.container}>
        <View style={{marginHorizontal: 10, marginVertical: 20}}>
          {/* header */}
          <Text style={gStyles.headerText}>Profile</Text>
          {/* profile image and account */}
          <View style={styles.profile}>
            <View>
              <Image
                style={{width: 80, height: 80, borderRadius: 40}}
                source={require('../../asset/images/user/pp.jpg')}
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text
                style={{textAlign: 'center', fontSize: 18, color: '#2B3467'}}>
                Mewo
              </Text>
              <Text style={{color: '#2B3467'}}>meow@agga.io</Text>
            </View>
          </View>

          {/* profile body */}
          <View style={styles.profileBody}>
            {/* account setting */}
            <View style={styles.sl}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../asset/images/settings.png')}
                  style={styles.sicons}
                />
                <Text style={{marginLeft: 10, fontSize: 16, fontWeight: '500'}}>
                  Account Setting
                </Text>
              </View>
              <View>
                <FAS name="arrow-right" color="black" size={20} />
              </View>
            </View>

            {/* change password */}
            <View style={styles.sl}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../asset/images/icons/key.png')}
                  style={styles.sicons}
                />
                <Text style={{marginLeft: 10, fontSize: 16, fontWeight: '500'}}>
                  Change Password
                </Text>
              </View>
              <View>
                <FAS name="arrow-right" color="black" size={20} />
              </View>
            </View>

            {/* User Gide */}
            <View style={styles.sl}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../asset/images/icons/guide.png')}
                  style={styles.sicons}
                />
                <Text style={{marginLeft: 10, fontSize: 16, fontWeight: '500'}}>
                  User Guide
                </Text>
              </View>
              <View>
                <FAS name="arrow-right" color="black" size={20} />
              </View>
            </View>

            {/* privacy policy */}
            <View style={styles.sl}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../asset/images/icons/privacy.png')}
                  style={styles.sicons}
                />
                <Text style={{marginLeft: 10, fontSize: 16, fontWeight: '500'}}>
                  Privacy Policy
                </Text>
              </View>
              <View>
                <FAS name="arrow-right" color="black" size={20} />
              </View>
            </View>

            {/* terms and conditions */}
            <View style={styles.sl}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../asset/images/icons/terms-and-conditions.png')}
                  style={styles.sicons}
                />
                <Text style={{marginLeft: 10, fontSize: 16, fontWeight: '500'}}>
                  Terms and Conditions
                </Text>
              </View>
              <View>
                <FAS name="arrow-right" color="black" size={20} />
              </View>
            </View>

            {/* logout */}
            <TouchableOpacity onPress={logoutHandle}>
              <View style={{alignItems: 'center', marginTop: 50}}>
                <View style={styles.logout}>
                  <Image
                    source={require('../../asset/images/icons/arrow.png')}
                  />
                  <Text
                    style={{marginLeft: 10, fontWeight: '500', color: 'white'}}>
                    Logout
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Info;

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
    marginTop: 10,
  },
  profileBody: {
    marginTop: 80,
  },
  sl: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sicons: {
    width: 30,
    height: 30,
  },
  logout: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#EB455F',
    padding: 15,
    width: 150,

    borderRadius: 15,
  },
});
