// import React, {useState} from 'react';
// import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Ant from 'react-native-vector-icons/AntDesign';
// import gStyles from '../../globalStyle';

// const Nav = ({navigation}) => {
//   const [act, setAct] = useState({
//     home: true,
//     list: false,
//     add: false,
//     info: false,
//   });

//   const homeHandle = () => {
//     setAct(pre => {
//       (pre.home = true),
//         (pre.list = false),
//         (pre.add = false),
//         (pre.info = false);
//     });
//     navigation.navigate('Home');
//   };
//   const listHandle = () => {
//     // setAct(pre => {
//     //   (pre.home = false),
//     //     (pre.list = true),
//     //     (pre.add = false),
//     //     (pre.info = false);
//     // });
//     navigation.navigate('Lists');
//   };
//   const addHandle = () => {
//     // setAct(pre => {
//     //   (pre.home = false),
//     //     (pre.list = false),
//     //     (pre.add = true),
//     //     (pre.info = false);
//     // });
//     navigation.navigate('AddCustomer');
//   };
//   const infoHandle = () => {
//     // setAct(pre => {
//     //   (pre.home = false),
//     //     (pre.list = false),
//     //     (pre.add = false),
//     //     (pre.info = true);
//     // });
//     navigation.navigate('Info');
//   };
//   return (
//     <View style={gStyles.mainNavContainer}>
//       {/* <Text>This is HomeScreen...</Text> */}
//       <TouchableOpacity>
//         <View
//           style={[styles.icons, act.home && styles.actIcon]}
//           onPress={homeHandle}>
//           <Ant name="home" color="#121212" size={25} />
//           <Text style={{color: 'black', marginLeft: 4}}>Main</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={listHandle}>
//         <View style={[styles.icons, act.list && styles.actIcon]}>
//           <Icon name="list-ul" color="#121212" size={25} />
//           <Text style={{color: 'black', marginLeft: 4}}>Lists</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={addHandle}>
//         <View style={[styles.icons, act.add && styles.actIcon]}>
//           <Ant name="adduser" color="#121212" size={25} />
//           <Text style={{color: 'black', marginLeft: 4}}>Add</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={infoHandle}>
//         <View style={[styles.icons, act.info && styles.actIcon]}>
//           <Icon name="user-circle-o" color="#121212" size={25} />
//           <Text style={{color: 'black', marginLeft: 4}}>Info</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Nav;

// const styles = StyleSheet.create({
//   icons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 30,
//   },
//   actIcon: {
//     backgroundColor: '#BAD7E9',
//   },
// });
