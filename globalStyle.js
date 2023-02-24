const {StyleSheet} = require('react-native');

const gStyles = StyleSheet.create({
  fBgImg: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 15,
    // backgroundColor: 'red'
  },
  mainNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cButtom: {
    backgroundColor: '#EB455F',
    textAlign: 'center',
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 20,
    marginTop: 30,
  },
  smallBtn: {
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
    fontSize: 17,
    fontWeight: 500,
    borderRadius: 10,
  },
  headerText: {
    color: '#2B3467',
    fontSize: 25,
    fontWeight: 500,
  },
});

export default gStyles;
