import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

const Dashboardlayout = () => {
  return (
    <Stack>
        <Stack.Screen
            name="changepassword"
            options={({ navigation }) => ({
            headerShown: true,
            title: 'Change Password',
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
            
            headerLeft: () => (
                <Ionicons
                    name="arrow-back"
                    size={24}
                    color="#133eba"
                    onPress={() => navigation.goBack()} 
                    style={{ marginRight: 15, marginTop: 7 }}
                />
            ),
            })}
        />
    </Stack>
  )
}

export default Dashboardlayout