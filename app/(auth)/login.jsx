import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, router } from 'expo-router';
import CustomSetAreaView from '../../components/CustomSetAreaView';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import styles from '../../components/styles/authstyles';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
    router.push('/home');
  };

  const handleSignUp = () => {
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
                AjangoVTU <Text style={{ fontSize: 14 }}>(v1.0)</Text>
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
                Don't have an account ? <Link href="/register" style={{ color: 'red' }}>Register</Link>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;