import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Nav = ({actList, setActList}) => {
  const requestHandle = () => {
    setActList(pre => ({...pre, request: true, reject: false, confirm: false}));
  };
  const rejectHandle = () => {
    setActList(pre => ({...pre, request: false, reject: true, confirm: false}));
  };
  const confirmHandle = () => {
    setActList(pre => ({...pre, request: false, reject: false, confirm: true}));
  };
  // console.log(actList);
  return (
    <View>
      <View style={styles.navItemsContainer}>
        <TouchableOpacity onPress={requestHandle}>
          <Text style={[styles.item, actList.request && styles.act]}>
            Request Lists
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={rejectHandle}>
          <Text style={[styles.item, actList.reject && styles.act]}>
            Reject Lists
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={confirmHandle}>
          <Text style={[styles.item, actList.confirm && styles.act]}>
            Comfirm Lists
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  navItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 0.5,
  },
  item: {
    color: '#2B3467',
    padding: 15,
    borderBottomColor: 'red',
  },
  act: {
    borderBottomWidth: 2,
  },
});

// style={[styles.item, actList.confirm && styles.act]}
// style={[styles.item, styles.act]}
