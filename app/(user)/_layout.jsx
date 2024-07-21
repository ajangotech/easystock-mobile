import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
              name="home"
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
        name="cart"
        options={{
          headerShown: true,
          title: 'Cart',
            headerTitleStyle:{
                fontFamily: 'PlusJakartaSans-Bold',  
                textAlign: "center",
                
            },
            headerStyle:{
              backgroundColor:'#133eba',
              borderBottomColor: 'transparent',
              
            },

            headerTintColor: 'white',
            tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="cart"
              color={focused ? '#090e7a' : '#133eba'} 
              size={24}
            />
          ),
        
          tabBarLabelStyle: {
            fontFamily: 'PlusJakartaSans-Bold',
            fontSize: 15,
            color: '#133eba',
          },
          tabBarActiveTintColor: '#090e7a', 
          tabBarInactiveTintColor: '#133eba',
        }}
      />

      <Tabs.Screen
        name="invoice"
        options={{
          headerShown: true,
          title: 'Invoice',
            headerTitleStyle:{
                fontFamily: 'PlusJakartaSans-Bold',  
                textAlign: "center",
                
            },
            headerStyle:{
              backgroundColor:'#133eba',
              borderBottomColor: 'transparent',
            },

            headerTintColor: 'white',
            tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="document-text"
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
        name="products"
        options={{
          headerShown: true,
          title: 'Products',
            headerTitleStyle:{
                fontFamily: 'PlusJakartaSans-Bold',  
                textAlign: "center",
                
            },
            headerStyle:{
              backgroundColor:'#133eba',
              borderBottomColor: 'transparent',
            },

            headerTintColor: 'white',
            tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="bag-handle"
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

    </Tabs>
  );
};

export default UserLayout;
