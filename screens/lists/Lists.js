import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import NoData from '../../components/helper/NoData';
import gStyles from '../../globalStyle';
import Confirm from './Confirm';
import Nav from './Nav';
import Reject from './Reject';
import Request from './Request';

const Lists = ({navigation}) => {
  const [actList, setActList] = useState({
    request: true,
    reject: false,
    confirm: false,
  });
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 10, marginVertical: 20}}>
        {/* header */}
        <Text style={gStyles.headerText}>Request List</Text>
      </View>

      {/* for nav */}
      <View style={styles.navContainer}>
        <Nav actList={actList} setActList={setActList} />
      </View>

      {/* for body */}
      <View style={styles.bodyContainer}>
        {/* for request */}
        {actList.request && <Request />}

        {/* for reject */}
        {actList.reject && <Reject />}

        {/* for confirm */}
        {actList.confirm && <Confirm />}
      </View>
    </View>
  );
};

export default Lists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navContainer: {
    marginTop: 20,
  },
  bodyContainer: {
    marginTop: 30,
  },
});
