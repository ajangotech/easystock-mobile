import { View, Text, StyleSheet, FlatList, RefreshControl, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import CustomSetAreaView from '../../components/CustomSetAreaView'
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const Home = () => {
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = null;

  const data = [
    { id: 1, product_name: 'Cotton Wool', qty: 50, prices: { purchased: '50,000', wholesale: '50,000', retail: '50,000' }, status: 'active' },
    { id: 2, product_name: 'Padlock', qty: 24, prices: { purchased: '30,000', wholesale: '13,000', retail: '23,000' }, status: 'active' },
    { id: 3, product_name: 'Notebook', qty: 100, prices: { purchased: '10,000', wholesale: '12,000', retail: '15,000' }, status: 'active' },
    { id: 4, product_name: 'Pen', qty: 200, prices: { purchased: '1,000', wholesale: '1,500', retail: '2,000' }, status: 'active' },
    { id: 5, product_name: 'Laptop Charger', qty: 15, prices: { purchased: '5,000', wholesale: '6,000', retail: '8,000' }, status: 'inactive' },
    { id: 6, product_name: 'Smartphone Case', qty: 60, prices: { purchased: '2,000', wholesale: '2,500', retail: '3,000' }, status: 'active' },
    { id: 7, product_name: 'Headphones', qty: 30, prices: { purchased: '15,000', wholesale: '18,000', retail: '22,000' }, status: 'active' },
    { id: 8, product_name: 'Wireless Mouse', qty: 45, prices: { purchased: '3,000', wholesale: '4,000', retail: '5,000' }, status: 'active' },
    { id: 9, product_name: 'Office Chair', qty: 10, prices: { purchased: '50,000', wholesale: '55,000', retail: '60,000' }, status: 'inactive' },
    { id: 10, product_name: 'Desk Lamp', qty: 25, prices: { purchased: '7,000', wholesale: '8,500', retail: '10,000' }, status: 'active' },
  ];


  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={{color:"#fff", fontFamily: 'PlusJakartaSans-Bold',}}>&#8358;{item.prices.wholesale}</Text>
      <Text style={{color:"#fff", fontFamily: 'PlusJakartaSans-Bold',}}>{item.product_name}</Text>
    </View>
  );

  return (
    <>
      <CustomSetAreaView />
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
        <View style={styles.wrapper}>
          <Ionicons name="notifications" size={24} color='#133eba' /> 
        </View>
        <Text style={styles.subtitle}>Welcome! Abdurrahim, [aymmuazu].</Text>

        <View>
          <Text style={styles.title}>Search a Product</Text>
          <View>
            <CustomInput 
                value={search} 
                placeholder="e.g. 40 Leaves"   
                onChangeText={setSearch}
                keyboardType="text"
                autoCapitalize="none"
              />
          </View>

          <CustomButton 
            title="Search"
          />

        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.title}>Daily <Ionicons name="bar-chart" size={14}/></Text>
          <Text style={styles.subtitle}>Total Sales:    <Text style={{ fontSize: 14 }}>&#8358; 1,000:00</Text></Text>
          <Text style={styles.subtitle}>Total Discount:    <Text style={{ fontSize: 14 }}>&#8358; 50</Text></Text>
          <Text style={styles.subtitle}>Total Invoices:    <Text style={{ fontSize: 14 }}>(10)</Text></Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={renderItem}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.recenttitle}>Recent Transactions</Text>
          <View style={styles.transaction}>
            <Image source={require('../../assets/images/no-trans.png')} style={{ width: 150, height: 150, marginTop: 0, marginBottom: 0 }} />
            <Text style={styles.transbody}>
              <Ionicons name="alert-circle-sharp"/> It seems there are no recent activities to display here.
              Being by intiating a transaction to get started.
            </Text>
          </View>
        </View>
      </View>
      </ScrollView>
    </>
  )
}

export default Home;

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
    fontSize: 20,
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