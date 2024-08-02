import { View, Text, StyleSheet, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../components/styles/styles';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { CheckBox } from 'react-native-elements';

const Airtime = () => {

  const [refreshing, setRefreshing] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle refresh
  const onRefresh = () => {
    setRefreshing(true);
    // Add your refresh logic here
    // After refresh logic is done
    setRefreshing(false);
  };

  const networks = [
    { label: 'MTN', value: '1' },
    { label: 'AIRTEL', value: '2' },
    { label: 'GLO', value: '3' },
    { label: '9MOBILE', value: '4' },
  ];

  const renderLabel = (label) => {
    if (label || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          {label}
        </Text>
      );
    }
    return null;
  };

  const handleSubmit = () => {
    // Add your submit logic here
  };

  return (
    <View style={{ marginTop: 20 }}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            title="Refreshing..."
            colors={['#133eba']}
          />
        }
      >
        <View style={styles.safeArea}>
          <View style={styles.container}>
            {renderLabel('Select Network')}
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={networks}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Network' : '...'}
              searchPlaceholder="Search..."
              value={selectedNetwork}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setSelectedNetwork(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon_style}
                  color={isFocus ? 'blue' : 'black'}
                  name="Safety"
                  size={20}
                />
              )}
            />

            <View style={styles.customInputView}>
              <CustomInput placeholder="Phone No." />              
            </View>

            <View style={styles.customInputView}>
              <CustomInput placeholder="Amount" />              
            </View>

            <View>
              
            </View>

            <View style={styles.customInputView}>
              <TouchableOpacity>
                <CustomButton 
                  title="Buy Airtime" 
                  icon_name="globe-outline" 
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

export default Airtime;
