import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const NavForAdd = ({actNav, setActNav}) => {
  const infoHandle = () => {
    setActNav(pre => ({...pre, information: true, subscription: false}));
  };
  const subHandle = () => {
    setActNav(pre => ({...pre, information: false, subscription: true}));
  };

  // console.log(actNav);
  return (
    <View>
      <View style={styles.navItemsContainer}>
        <TouchableOpacity onPress={infoHandle}>
          <Text style={[styles.item, actNav.information && styles.act]}>
            Personal Information
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={subHandle}>
          <Text style={[styles.item, actNav.subscription && styles.act]}>
            Subscription Plan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavForAdd;

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
    // backgroundColor: 'white',
  },
});

// style={[styles.item, actList.confirm && styles.act]}
// style={[styles.item, styles.act]}
