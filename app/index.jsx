import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomSetAreaView from '../components/CustomSetAreaView'
import CustomButton from '../components/CustomButton';

export default function Page() {
  return (
    <>
      <CustomSetAreaView />
      <View style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.main}>
            
            <View style={{ alignItems: 'center' }}>
              <Image source={require('../assets/images/icon.png')} style={styles.icon}/>
              <Text style={styles.title}>EasyStock <Text style={{ fontSize: 14 }}>(v1.0)</Text></Text>
            </View>

            <Image source={require('../assets/images/banner.png')} style={styles.banner}/>
            <Text style={styles.subtitle}>Let's get started to add our products.</Text>

            <View style={{ marginTop: 50 }}>
              <CustomButton 
                title="Continue" 
                icon_name="arrow-forward-circle-sharp" 
                icon_size={32} icon_color="white" 
                handleSubmit={() => router.push('/home')} />
            </View>
            
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    height: 200,
    resizeMode: 'cover',
    marginVertical: 20,
  },
  title: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 40,
  },
  subtitle: {
    fontSize: 16,
    color: "#000",
    fontFamily: 'PlusJakartaSans-Bold',
    marginBottom: 20,
    textAlign: 'center',
  },

});
