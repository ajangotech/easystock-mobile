import { View, Text, StyleSheet, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../components/styles/styles';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { CheckBox } from 'react-native-elements';

const Data = () => {

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = null;
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [selectedPlanType, setSelectedPlanType] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const networks = [
    { label: 'MTN', value: '1' },
    { label: 'AIRTEL', value: '2' },
    { label: 'GLO', value: '3' },
    { label: '9MOBILE', value: '4' },
  ];

  const plansType = [
    { label: 'SME', value: 'SME' },
    { label: 'CG', value: 'CG' },
    { label: 'SME2', value: 'SME2' },
    { label: 'CORPORATE GIFITING', value: 'CORPORATE GIFTING' },
  ];

  const plans = [
    { label: '1GB SME', value: '1', plansType: 'SME', network_id: '1' },
    { label: '2GB SME', value: '2', plansType: 'SME', network_id: '1' },
    { label: '1GB CG', value: '3', plansType: 'CG', network_id: '2' },
    { label: '500MB SME', value: '4', plansType: 'SME', network_id: '2' },
    // Add more plans as needed
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

  const filteredPlans = plans.filter(plan =>
    plan.network_id === selectedNetwork && plan.plansType === selectedPlanType
  );

  const handleSubmit = () => {
    return null;
  }

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
            {/* Network Dropdown */}
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
                setSelectedPlanType(null); // Reset Plan Type when Network changes
                setSelectedPlan(null); // Reset Plan when Network changes
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

            {/* Plan Type Dropdown */}
            {selectedNetwork && renderLabel('Select Plan Type')}
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={plansType}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Plan Type' : '...'}
              searchPlaceholder="Search..."
              value={selectedPlanType}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setSelectedPlanType(item.value);
                setSelectedPlan(null); // Reset Plan when Plan Type changes
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
              disabled={!selectedNetwork}
            />

            {/* Plans Dropdown */}
            {selectedNetwork && selectedPlanType && renderLabel('Select Plan')}
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={filteredPlans}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Plan' : '...'}
              searchPlaceholder="Search..."
              value={selectedPlan}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setSelectedPlan(item.value);
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
              disabled={!selectedPlanType}
            />

            <View style={styles.customInputView}>
              <CustomInput placeholder="e.g. 08137736578" />              
            </View>

            <View>
              <CheckBox
                title="Ported"
                checked={isChecked}
                onPress={() => setIsChecked(!isChecked)}
                checkedColor="#133eba"
                uncheckedColor="#ccc"
                textStyle={styles.checktextStyle} 
                containerStyle={styles.checkboxContainer}
                iconLeft
              />
            </View>

            <View style={styles.customInputView}>
              <TouchableOpacity>
                <CustomButton 
                  title="Buy Data" 
                  icon_name="globe-outline" 
                  icon_size={20} icon_color="white" 
                  handleSubmit={handleSubmit}/>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Data;
