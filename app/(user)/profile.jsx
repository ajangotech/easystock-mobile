import { View, Text, StyleSheet, ScrollView, RefreshControl, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../components/styles/styles';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

const Profile = () => {

  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync('access_token');
      await SecureStore.deleteItemAsync('is_already_login');
      await SecureStore.deleteItemAsync('is_setBiometric');
      router.replace('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ marginTop: 0 }}>
      <ScrollView>
        <View style={styles.safeArea}>
          <View style={styles.container}>
            <View>
              <View>
                <View style={{ 
                  alignContent: 'center', 
                  alignItems: 'center', 
                  backgroundColor: '#fff', 
                  borderRadius: 20, 
                  shadowColor: '#133eba', 
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25, 
                  shadowRadius: 4, 
                  elevation: 10
                }}>

                  <View style={styles.profile}>
                    <Ionicons name="person-circle" color="#133eba" size={100} />
                  </View>
                  <Text style={styles.title}>Personal Information</Text>
                  <View style={{ marginTop: 10, marginBottom: 20, alignItems: 'center' }}>
                    <Text style={styles.profileFont}>Abdurrahim Yahya Muazu</Text>
                    <Text style={styles.profileFont}>aymmuazu@gmail.com</Text>
                    <Text style={styles.profileFont}>Joined: 2 hours ago.</Text>
                    <View style={styles.badgeItem}>
                      <View style={styles.badge}><Text style={{ color: '#fff', fontFamily: 'PlusJakartaSans-Bold', textTransform: 'uppercase' }}>User <Ionicons name='person-circle' size={15}/></Text></View>

                      <TouchableOpacity onPress={handleLogout}>
                        <View style={styles.badgeLogout}><Text style={{ color: '#fff', fontFamily: 'PlusJakartaSans-Bold', textTransform: 'uppercase' }}>Logout <Ionicons name='log-out' size={15}/></Text></View>
                      </TouchableOpacity>

                    </View>
                  </View>
                </View>

                <View style={{ marginTop: 20, marginBottom: 20 }}>
                  <View style={{ marginBottom: 20 }}>
                    <Text style={styles.title}>Help Center</Text>
                  </View>
                  <Text style={styles.helpcenter}>Contact Us <FontAwesome name='external-link' color="#133eba" size={20}/></Text>
                  <Text style={styles.helpcenter}>About Us <FontAwesome name='external-link' color="#133eba" size={20}/></Text>
                  <Text style={styles.helpcenter}>Privacy & Policy <FontAwesome name='external-link' color="#133eba" size={20}/></Text>

                  <View style={{ marginTop: 12 }}>
                    <TouchableOpacity onPress={() => router.push('/../changepassword')}>
                      <Text style={styles.helpcenterLink}>Change Password <FontAwesome name='link' color="#133eba" size={20}/></Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>

              <View style={styles.profileFooter}>
                  <Text style={{ fontFamily: 'PlusJakartaSans-Bold', }}>Version 2.0</Text>
                </View>

            </View>

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
