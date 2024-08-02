import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    fontFamily: 'PlusJakartaSans-Medium',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    fontFamily: 'PlusJakartaSans-Medium',
    padding: 24,
    width: '100%',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    fontFamily: 'PlusJakartaSans-Medium',
    width: '100%',
  },
  icon: {
    width: 80,
    height: 80,
  },
  title: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 40,
  },
  form: {
    width: '100%',
    marginVertical: 20,
    fontFamily: 'PlusJakartaSans-Medium',
  },
  
  footer: {
    marginTop: 20,
    alignItems: 'center',
    fontFamily: 'PlusJakartaSans-Medium',
  },
  footerText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#133eba'
  },

  fingerPrintView: {
    alignContent: 'center',
    alignItems: 'center'
  }
});


export default styles