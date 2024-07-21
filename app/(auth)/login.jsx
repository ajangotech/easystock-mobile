import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, router } from 'expo-router';
import CustomSetAreaView from '../../components/CustomSetAreaView';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', email, password);
    // Example redirection on successful login
    router.push('/home');
  };

  const handleSignUp = () => {
    // Navigate to sign-up screen
    router.push('/signup');
  };

  return (
    <>
      <CustomSetAreaView />
      <View style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.main}>
            <View style={{ alignItems: 'center' }}>
              <Image source={require('../../assets/images/icon.png')} style={styles.icon} />
              <Text style={styles.title}>
                EasyStock <Text style={{ fontSize: 14 }}>(v1.0)</Text>
              </Text>
            </View>

            <View style={styles.form}>
              <CustomInput 
                value={email} 
                placeholder="Email"   
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <CustomInput 
                value={password} 
                placeholder="*********"   
                onChangeText={setPassword}
                keyboardType="password"
                secureTextEntry={true}
              />
             
              <CustomButton 
                title="Login" 
                icon_name="log-in" 
                icon_size={32} icon_color="white" 
                handleSubmit={() => handleLogin} />

            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                EasyStock Version 1.0 <Ionicons name='accessibility'/>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;

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
    fontSize: 14,
    color: '#000',
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#133eba'
  },
});
