import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const NoData = () => {
  return (
    <View>
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
          <Text style={{textAlign: 'center', fontSize: 16, marginTop: 10}}>
            There's no data for you
          </Text>
        </View>
        {/* right */}
        <View>
          <Image source={require('../../asset/images/31.png')} />
        </View>
      </View>
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({
  requestBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
});
