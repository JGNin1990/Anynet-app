import {StyleSheet} from 'react-native';

const infoStyle = StyleSheet.create({
  forcon: {
    backgroundColor: 'white',
    flex: 1,
    // marginHorizontal: 15,
  },

  forP: {
    paddingTop: 20,
  },
  forText: {
    fontSize: 16,
    fontWeight: '500',
    // color: '#2B3467',
  },
  forInput: {
    // color: '#2B3467',
    backgroundColor: '#eeeeee',
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
    fontSize: 15,
  },
  forbtn: {
    backgroundColor: '#EB455F',
    textAlign: 'center',
    // marginHorizontal: 20,
    padding: 12,
    borderRadius: 15,
    marginTop: 30,
    justifyContent: 'center',
  },
});

export default infoStyle;
