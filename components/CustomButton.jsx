import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomButton = ({ title, icon_name, icon_size, icon_color, handleSubmit  }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>{title}</Text>
            <Ionicons name={icon_name} style={{ marginTop: 0 }} size={icon_size} color={icon_color} />
        </View>
    </TouchableOpacity>
  )
}

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#133eba',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 6,
    textTransform: 'uppercase',
    fontFamily: 'PlusJakartaSans-Bold',
    marginRight: 5, 
  },
 })
