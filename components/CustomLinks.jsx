import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const CustomLinks = ({ title, icon_name, handlePress }) => {
  return (
    <TouchableOpacity onPress={() => router.push(handlePress)}>
      <View style={{ alignContent: 'center', alignItems: 'center' }}>
        <Ionicons name={icon_name} color="#133eba" size={25} />
        <Text style={{ fontFamily: 'PlusJakartaSans-Bold', fontSize: 12 }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomLinks;
