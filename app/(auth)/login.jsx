import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, router } from 'expo-router';
import CustomSetAreaView from '../../components/CustomSetAreaView';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomAlert from '../../components/CustomAlert';
import { login } from '../../stores/reducers/auth';
import styles from '../../components/styles/authstyles';
import { TouchableWithoutFeedback } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { openBrowserAsync } from 'expo-web-browser';
import { useDispatch } from 'react-redux';
import * as SecureStore from 'expo-secure-store';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [issetBiometric, setIsSetBiometric] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertTitle, setAlertTitle] = useState('');
  const [loading, setLoading] = useState(false); 

  
  useEffect(() => {
    const checkAccessToken = async () => {
      const isAlreadyLogin = await SecureStore.getItemAsync('is_already_login');
      const access_token = await SecureStore.getItemAsync('access_token');
      if (isAlreadyLogin == 'true') {
        router.replace('/home');
      }
      else if (isAlreadyLogin == 'false' && access_token !== null) {
        setIsSetBiometric(true);
      }
    };
    checkAccessToken();
  }, []);


  const showAlert = () => {
    setAlertVisible(true);
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  const handleLogin = async () => {
    if (email === '' || password === '') {
      setAlertTitle('Oops! Error');
      setAlertMessage('All fields are required.');
      showAlert();
      return;
    }
    setLoading(true); 

    dispatch(login({ email, password })).then(async (action) => {
      setLoading(false);

      switch (action.type) {
        case login.pending.type:
          setLoading(true);
          break;

        case login.rejected.type:
          setAlertTitle('Something went wrong!');
          setAlertMessage('Check your inputs and try again.');
          showAlert();
          break;

        case login.fulfilled.type:

          await SecureStore.setItemAsync('access_token', action.payload.access_token);
          await SecureStore.setItemAsync('is_already_login', 'true');
          await SecureStore.setItemAsync('is_setBiometric', 'false'); 

          setTimeout(() => {
            router.replace('/home');
          }, 1000);
          break;

        default:
          break;
      }
    });
  };

  const handleFingerPrint = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (hasHardware && isEnrolled) {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Sign in to AjangoVTU',
        fallbackLabel: 'Enter password',
        cancelLabel: 'Cancel',
      });

      if (result.success) {
        router.push('/home');
      } else {
        setIsSetBiometric(true);
      }
    } else {
      setIsSetBiometric(false);
    }
  };

  const handleRegister = () => {
    openBrowserAsync('http://192.168.138.92:8082/register');
  };

  const handleForgot = () => {
    openBrowserAsync('http://192.168.138.92:8082/login');
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
                AjangoVTU <Text style={{ fontSize: 14 }}>(v2.0)</Text>
              </Text>
            </View>

            <CustomAlert
              visible={alertVisible}
              onClose={closeAlert}
              title={alertTitle}
              message={alertMessage}
            />

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

              <View style={styles.forgot}>
                <Text style={styles.forgotText}>
                  <TouchableWithoutFeedback onPress={handleForgot}>
                    <Text> Forgot Password?</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>

              <CustomButton
                title="Login"
                icon_name="log-in"
                icon_size={32}
                icon_color="white"
                handleSubmit={handleLogin}
              />

              <View style={styles.footer}>
                <Text style={styles.footerText}>
                  <TouchableWithoutFeedback onPress={handleRegister}>
                    <Text> Don't have an account? Register</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>

            {issetBiometric && (
              <View style={styles.fingerPrintView}>
                <TouchableWithoutFeedback onPress={handleFingerPrint}>
                  <Ionicons color="#133eba" size={40} name="finger-print" />
                </TouchableWithoutFeedback>
              </View>
            )}

            {loading && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#133eba" />
                <Text style={styles.loadingText}></Text>
              </View>
            )}

          </View>
        </View>
      </View>
    </>
  );
};

export default Login;
