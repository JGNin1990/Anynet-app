import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import gStyles from '../../globalStyle';
import FAS from 'react-native-vector-icons/FontAwesome';
import Mci from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  return (
    <ImageBackground
      style={gStyles.fBgImg}
      source={require('../../asset/images/background.png')}>
      <View style={gStyles.container}>
        <View style={styles.homeContainer}>
          {/* home body */}
          <View>
            {/* main logo and profile */}
            <View style={styles.forHeader}>
              <View style={{}}>
                <Image source={require('../../asset/images/logo.png')} />
              </View>
              <View>
                <Image
                  source={require('../../asset/images/user/pp.jpg')}
                  style={{width: 40, height: 40, borderRadius: 40}}
                />
              </View>
            </View>

            {/* hi user or for second header */}
            <View style={styles.forSecHeader}>
              {/* left */}
              <View>
                <Text
                  style={{fontSize: 20, fontWeight: '900', color: '#2B3467'}}>
                  Hi, Meow
                </Text>
                <Text>Good Morning</Text>
              </View>

              {/* right */}
              <View>
                <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>
                  Your Days look like this :
                </Text>
                <View style={styles.dayLook}>
                  <FAS name="check-circle" color="#2B3467" />
                  <Text style={{marginLeft: 10, color: '#2B3467'}}>
                    0 tasks Pending
                  </Text>
                </View>
                <View style={styles.dayLook}>
                  <Mci name="clock" color="#2B3467" />
                  <Text style={{marginLeft: 10, color: '#2B3467'}}>
                    0 maintain Pending
                  </Text>
                </View>
              </View>
            </View>

            {/* maintain list */}
            <View style={styles.maintainContainer}>
              {/* section header */}
              <View style={styles.sectionHeader}>
                <Text
                  style={{color: '#2B3467', fontSize: 20, fontWeight: 'bold'}}>
                  Maintain List
                </Text>
                <Text style={{fontSize: 15}}>View all</Text>
              </View>
              {/* section body */}
              <View
                style={{
                  position: 'relative',
                }}>
                {/* background imgae */}
                <Image
                  source={require('../../asset/images/Rectangle1.png')}
                  style={{width: '100%'}}
                />
                {/* left */}
                <View style={{position: 'absolute', top: 18, left: 30}}>
                  <Image source={require('../../asset/images/14.png')} />
                </View>
                {/* right */}
                <View style={{position: 'absolute', top: 65, right: 35}}>
                  <Text style={{color: 'white', fontSize: 15}}>
                    No Data To Display...
                  </Text>
                </View>
              </View>
            </View>

            {/* request list */}
            <View style={styles.requestContainer}>
              {/* section header */}
              <View style={styles.sectionHeader}>
                <Text
                  style={{color: '#2B3467', fontSize: 20, fontWeight: 'bold'}}>
                  Request List
                </Text>
                <Text style={{fontSize: 15}}>View all</Text>
              </View>

              {/* section body */}
              <View style={styles.requestBody}>
                {/* left */}
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: '900',
                      color: '#2B3467',
                      textAlign: 'center',
                    }}>
                    Hi, Meow
                  </Text>
                  <Text
                    style={{textAlign: 'center', fontSize: 16, marginTop: 10}}>
                    There's no data for you
                  </Text>
                </View>
                {/* right */}
                <View>
                  <Image source={require('../../asset/images/31.png')} />
                </View>
              </View>
            </View>
          </View>

          {/* bottom tabs */}
          <View></View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  forHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  forSecHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  dayLook: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FCFFE7',
    paddingVertical: 6,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginTop: 8,
  },
  maintainContainer: {
    marginTop: 45,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  requestContainer: {
    marginTop: 20,
  },
  requestBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
});
