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
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  loadingText: {
    fontSize: 16,
    color: '#133eba',
    marginTop: 10,
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
    fontSize: 30,
  },
  form: {
    width: '100%',
    marginVertical: 20,
    fontFamily: 'PlusJakartaSans-Medium',
  },
  
  footer: {
    marginTop: 10,
    alignItems: 'center',
    fontFamily: 'PlusJakartaSans-Medium',
  },
  footerText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#133eba'
  },

  forgot: {
    marginBottom: 10,
    alignItems: 'flex-end',
    fontFamily: 'PlusJakartaSans-Medium',
  },
  forgotText: {
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