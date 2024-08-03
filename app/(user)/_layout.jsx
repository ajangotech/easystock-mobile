import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const UserLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
          marginBottom: 0,
          paddingBottom: 10,
          backgroundColor: '#fff',
          borderRadius: 0,
          borderColor: '#fff',
        },
        tabBarIconStyle: {
          marginBottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={focused ? '#090e7a' : '#133eba'} 
              size={24}
            />
          ),
          tabBarLabelStyle: {
            fontFamily: 'PlusJakartaSans-Bold',
            fontSize: 14,
            color: '#133eba',
          },
          tabBarActiveTintColor: '#090e7a', 
          tabBarInactiveTintColor: '#133eba',
        }}
      />

      <Tabs.Screen
        name="data"
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Data',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "wifi" : "wifi-outline"}
              color={focused ? '#090e7a' : '#133eba'} 
              size={24}
            />
          ),
          headerTitleStyle: {
            fontFamily: 'PlusJakartaSans-Bold',
            color: '#133eba',
          },
          tabBarLabelStyle: {
            fontFamily: 'PlusJakartaSans-Bold',
            fontSize: 14,
            color: '#133eba',
          },
          tabBarActiveTintColor: '#090e7a', 
          tabBarInactiveTintColor: '#133eba',
          
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#133eba"
              onPress={() => navigation.goBack()} 
              style={{ marginLeft: 10, marginTop: 7 }}
            />
          ),
        })}
      />

      <Tabs.Screen
        name="airtime"
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Airtime',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "call" : "call-outline"}
              color={focused ? '#090e7a' : '#133eba'} 
              size={24}
            />
          ),
          headerTitleStyle: {
            fontFamily: 'PlusJakartaSans-Bold',
            color: '#133eba',
          },
          tabBarLabelStyle: {
            fontFamily: 'PlusJakartaSans-Bold',
            fontSize: 14,
            color: '#133eba',
          },
          tabBarActiveTintColor: '#090e7a', 
          tabBarInactiveTintColor: '#133eba',
          
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#133eba"
              onPress={() => navigation.goBack()} 
              style={{ marginLeft: 10, marginTop: 7 }}
            />
          ),
        })}
      />

      <Tabs.Screen
        name="profile"
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={focused ? '#090e7a' : '#133eba'} 
              size={24}
            />
          ),
          headerTitleStyle: {
            fontFamily: 'PlusJakartaSans-Bold',
            color: '#133eba',
          },
          tabBarLabelStyle: {
            fontFamily: 'PlusJakartaSans-Bold',
            fontSize: 14,
            color: '#133eba',
          },
          tabBarActiveTintColor: '#090e7a', 
          tabBarInactiveTintColor: '#133eba',
          
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#133eba"
              onPress={() => navigation.goBack()} 
              style={{ marginLeft: 10, marginTop: 7 }}
            />
          ),
        })}
      />      
    </Tabs>
    
  );
};

export default UserLayout;
