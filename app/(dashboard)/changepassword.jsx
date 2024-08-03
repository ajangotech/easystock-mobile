import { View, Text, StyleSheet, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../components/styles/styles';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { CheckBox } from 'react-native-elements';

const ChangePassword = () => {

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    // Add your submit logic here
  };

  return (
    <View style={{ marginTop: 0 }}>
      <ScrollView>

        <View style={styles.safeArea}>
          <View style={styles.container}>
            
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.title}>Welcome Back! Abdurrahim,</Text>
              <Text style={styles.subtitle}>Let's change your password right away</Text>
            </View>

            <View style={styles.customInputView}>
              <CustomInput placeholder="Current Password" onChangeText={setCurrentPassword} secureTextEntry={true} />              
            </View>

            <View style={styles.customInputView}>
              <CustomInput placeholder="New Password"  onChangeText={setNewPassword} secureTextEntry={true} />              
            </View>

            <View style={styles.customInputView}>
              <CustomInput placeholder="Confirm Password" onChangeText={setConfirmPassword} secureTextEntry={true} />              
            </View>

            <View>
              
            </View>

            <View style={styles.customInputView}>
              <TouchableOpacity>
                <CustomButton 
                  title="Change Password" 
                  icon_name="log-out-outline" 
                  icon_size={20} 
                  icon_color="white" 
                  handleSubmit={handleSubmit}
                />
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;
