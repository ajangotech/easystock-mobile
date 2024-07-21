import { View, Text, StyleSheet, FlatList, SafeAreaView, RefreshControl, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import CustomSetAreaView from '../../components/CustomSetAreaView'
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import RNPickerSelect from 'react-native-picker-select';

const Cart = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const sellingType = [
    { label: 'Retail', value: 'retail' },
    { label: 'Wholesale', value: 'wholesale' },
  ];

  const payMethod = [
    { label: 'Cash', value: 'cash' },
    { label: 'Bank Transfer', value: 'bank_transfer' },
    { label: 'POS', value: 'pos' },
  ];

  const products = [
    { label: 'Spiral Binding (50,000.00) (40)', value: 1 },
    { label: 'Note Book (65,000.00) (40)', value: 2 },
    { label: 'Laptop (150,000.00) (40)', value: 3 }
  ];

  const ChevronIcon = () => {
    return (
      <View>
        <Ionicons name="arrow-down-circle" size={24} color="#133eba" />
      </View>
    );
  };

  return (
    <SafeAreaView>
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
        <Text style={styles.title}>Add a Product <Ionicons name="bag-handle" color="#133eba" size={24}/></Text>

        <View style={{ borderWidth: 1,  marginTop: 20, borderColor: '#ddd', borderRadius: 5, }}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedValue(value)}
            items={sellingType}
            style={pickerSelectStyles}
            placeholder={{ label: 'Choose Selling Type', value: null }}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <ChevronIcon />;
            }}
          />
        </View>
        

         <View style={{ borderWidth: 1,  marginTop: 8, borderColor: '#ddd', borderRadius: 5, }}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedValue(value)}
            items={payMethod}
            style={pickerSelectStyles}
            placeholder={{ label: 'Choose Payment Method', value: null }}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <ChevronIcon />;
            }}
          />
        </View>

        <View style={{ borderWidth: 1,  marginTop: 8, borderColor: '#ddd', borderRadius: 5, }}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedValue(value)}
            items={products}
            style={pickerSelectStyles}
            placeholder={{ label: 'Choose Product', value: null }}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <ChevronIcon />;
            }}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <CustomInput placeholder="Discount"/>
          <CustomInput placeholder="Qty"/>
        </View>


        <CustomButton title='Add' icon_name="add-circle" icon_size={24} icon_color="#fff"/>
       </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Cart;

const styles = StyleSheet.create({
  safeArea: {
    fontFamily: 'PlusJakartaSans-Bold',
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20
  },

  flatListContainer: {
    paddingVertical: 10,
    paddingLeft:10
  },
  itemContainer: {
    backgroundColor: '#133eba',
    borderRadius: 10,
    height: 80,
    width: 120,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginBottom: 30
  },
  subtitle: {
    fontFamily: 'PlusJakartaSans-Bold',
  },
  title: {
    fontSize: 25,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  recenttitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
  },

  transaction: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },

  transbody: {
    fontFamily: 'PlusJakartaSans-Medium',
    textAlign: 'center',
    color: 'red'
  }
});

const pickerSelectStyles = {
  inputAndroid: {
    fontFamily: 'PlusJakartaSans-Bold',
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: '#242323',
    paddingRight: 30,
    height: 40,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',  // Add this line to center the items
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  inputIOS: {
    fontFamily: 'PlusJakartaSans-Bold',
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: '#242323',
    paddingRight: 30,
    height: 40,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  placeholder: {
    color: '#000',
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
  modalViewTop: {
    backgroundColor: '#fff',
  },
};
