import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomSetAreaView from '../components/CustomSetAreaView'
import CustomButton from '../components/CustomButton';
import styles from '../components/styles/indexstyles';

export default function Page() {
  return (
    <>
      <CustomSetAreaView />
      <View style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.main}>
            
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <Image source={require('../assets/images/icon.png')} style={styles.icon}/>
              <Text style={styles.title}>AjangoVTU <Text style={{ fontSize: 14 }}>(v2.0)</Text></Text>
            </View>

            <Image source={require('../assets/images/banner.png')} style={styles.banner}/>
            <Text style={styles.subtitle}>Let's Buy Data and Airtime</Text>

            <View style={{ marginTop: 20 }}>
              <CustomButton 
                title="Continue" 
                icon_name="arrow-forward-circle-sharp" 
                icon_size={20} icon_color="white" 
                handleSubmit={() => router.push('/login')} />
            </View>

            
          </View>
        </View>
      </View>
    </>
  );
}