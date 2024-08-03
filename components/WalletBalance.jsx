import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles/styles'
import Ionicons from '@expo/vector-icons/Ionicons';

const WalletBalance = () => {
  return (
    <View style={{ marginBottom: 10, display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <Ionicons name='wallet' size={40} color="#133eba"/>
        <Text style={styles.title}>Wallet Balance: &#8358;1,500</Text>
    </View>
  )
}

export default WalletBalance