import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ placeholder, value, keyboardType, autoCapitalize, secureTextEntry, onChangeText,  }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        cursorColor='#133eba'
      />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: 'PlusJakartaSans-Bold',
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
})