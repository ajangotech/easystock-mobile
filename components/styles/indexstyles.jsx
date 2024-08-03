import { useColorScheme } from 'react-native';
import { StyleSheet } from 'react-native';

const styles = (colorScheme) => StyleSheet.create({
  
  safeArea: {
    flex: 1,
    backgroundColor: colorScheme === 'dark' ? '#fff' : '#fff',
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    width: '100%',
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    width: '100%',
  },
  
  icon: {
    width: 80,
    height: 80
  },
  banner: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
    marginVertical: 20,
  },
  title: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 30,
  },
  subtitle: {
    fontSize: 16,
    color: "#000",
    fontFamily: 'PlusJakartaSans-Bold',
    marginBottom: 20,
    textAlign: 'center',
  },

});

export default styles;
