import React from 'react';
import {View, Text} from 'react-native';
import NoData from '../../components/helper/NoData';

const Reject = () => {
  return (
    <View>
      <Text style={{textAlign: 'center'}}>This is Reject section</Text>
      <NoData />
    </View>
  );
};

export default Reject;
