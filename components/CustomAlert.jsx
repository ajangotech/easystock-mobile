import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

const CustomAlert = ({ visible, onClose, title, message }) => {
  const colorScheme = useColorScheme();

  const isDarkMode = colorScheme === 'dark';

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={[styles.alertContainer, isDarkMode ? styles.darkAlertContainer : styles.lightAlertContainer]}>
          <Text style={[styles.alertTitle, isDarkMode ? styles.darkAlertTitle : styles.lightAlertTitle]}>{title}</Text>
          <Text style={[styles.alertMessage, isDarkMode ? styles.darkAlertMessage : styles.lightAlertMessage]}>{message}</Text>
          <TouchableOpacity style={[styles.closeButton, isDarkMode ? styles.darkCloseButton : styles.lightCloseButton]} onPress={onClose}>
            <Text style={[styles.closeButtonText, isDarkMode ? styles.darkCloseButtonText : styles.lightCloseButtonText]}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  alertContainer: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  lightAlertContainer: {
    backgroundColor: '#133eba',
  },
  darkAlertContainer: {
    backgroundColor: '#133eba',
  },
  alertTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  lightAlertTitle: {
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Bold',
  },
  darkAlertTitle: {
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Bold',
  },
  alertMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  lightAlertMessage: {
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Medium',
  },
  darkAlertMessage: {
    color: '#ddd',
    fontFamily: 'PlusJakartaSans-Medium',
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  lightCloseButton: {
    backgroundColor: '#fff',
  },
  darkCloseButton: {
    backgroundColor: '#333',
  },
  closeButtonText: {
    fontSize: 16,
  },
  lightCloseButtonText: {
    color: '#133eba',
    fontFamily: 'PlusJakartaSans-Bold',
  },
  darkCloseButtonText: {
    color: '#ddd',
    fontFamily: 'PlusJakartaSans-Bold',
  },
});
