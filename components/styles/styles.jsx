import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  cardAccount: {
    backgroundColor: '#133eba',
    borderRadius: 20,
    height: 130,
    marginRight: 0,
    padding: 10,
    marginTop: 10
  },

  icon: {
    width: 50,
    height: 50
  },

  notificationBanner: {
    backgroundColor: '#133eba',
    color: '#fff',
    borderRadius: 10,
    marginTop: 5,
    padding: 10,
  },

  username: {
    fontSize: 15,
    marginLeft: 3,
    fontWeight: 'bold'
  },
  eyeText: {
    color: '#fff',
    fontSize: 25,
    alignSelf: 'flex-end',
    marginTop: -33,
    marginRight: 10
  },
  available: {
    marginTop: 10,
    color: '#fff', fontSize: 15,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  balance: {
    marginTop: 0,
    fontSize: 30,
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Bold',
  },

  safeArea: {
    fontFamily: 'PlusJakartaSans-Bold',
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20
  },
  flatListContainer: {
    paddingVertical: 10,
    paddingLeft:10
  },
  itemContainer: {
    backgroundColor: '#133eba',
    borderRadius: 10,
    height: 130,
    width: 280,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'left',
    paddingLeft: 13
  },

  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginBottom: 10
  },
  subtitle: {
    fontFamily: 'PlusJakartaSans-Bold',
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontSize: 20,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  recenttitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
  },

  transaction: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },

  transbody: {
    fontFamily: 'PlusJakartaSans-Medium',
    textAlign: 'center',
    color: 'red'
  },

  dropdown: {
    height: 70,
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon_style: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  customInputView: {
    marginTop: 10
  },
  card: {
    marginTop: 20
  },

  checkboxContainer: {
    backgroundColor: '#fff',
    borderWidth: 0,
    padding: 0,   
    fontFamily: 'PlusJakartaSans-Medium',
  },
  checktextStyle: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 16,  
    color: '#595959',
  },
  
});

export default styles;
