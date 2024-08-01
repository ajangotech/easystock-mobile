import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomLinks = ({ title, icon_name }) => {
  return (
    <TouchableWithoutFeedback>
        <View style={styles.iconWrapper}>
            <View style={styles.icon}>
                <Ionicons name='wifi-outline' style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }} />
            </View>
            <Text style={{ fontFamily: 'PlusJakartaSans-Bold', }}>Buy Data</Text>
        </View>
    </TouchableWithoutFeedback>

  )
}

export default CustomLinks;

const styles = StyleSheet.create({
    iconWrapper: {
        
    },
    icon: {
        backgroundColor: '#133eba',
        width: 50,
        color: '#fff',
        borderRadius: 10,
        alignContent: 'center',
        alignItems:  'center'
    }
})