import { View, Text, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CustomSetAreaView = () => {
  if (Platform.OS === 'android') {
    return (
        <SafeAreaView edges={['top', 'buttom']} />
    )
  }
  else if (Platform.OS === 'ios') {
    return (
        <SafeAreaView edges={['buttom']} />
    )
  }
}

export default CustomSetAreaView;