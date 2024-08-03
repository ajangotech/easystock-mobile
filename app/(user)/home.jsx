import { View, Text, StyleSheet, FlatList, RefreshControl, ScrollView, Image, TouchableWithoutFeedback, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomSetAreaView from '../../components/CustomSetAreaView'
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomLinks from '../../components/CustomLinks';
import Clipboard from "@react-native-community/react-native-clipboard";
import styles from '../../components/styles/styles';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [viewBalance, setViewBalance] = useState(false);
  const [viewBalanceName, setViewBalanceName] = useState('eye');
  const [viewBalanceAmount, setViewBalanceAmount] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [copyClip, setCopyClip] = useState('copy-outline');

  const handleViewBalance = () => {
    setViewBalance(!viewBalance);
    setViewBalanceAmount(!viewBalanceAmount);
    setViewBalanceName(viewBalance ? 'eye' : 'eye-off-outline');
  }
  
  const onRefresh = null;
  const data = [
    { id: 1, account_no: '8137736578', account_name: 'AjangoVTU', charges: 35, bank_name: 'Kuda',  status: 'active' },    
    { id: 2, account_no: '8058622295', account_name: 'AjangoVTU', charges: 35, bank_name: 'Moniepoint',  status: 'active' },    
  ];


  const copyToClipboard = (account_no) => {
    Clipboard.setString(account_no);
    setCopyClip('copy');
    setTimeout(() => {
      setCopyClip('copy-outline')
    }, 1000);
  };
  
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 30}}>
        <View>
          <Text style={{color:"#fff", fontFamily: 'PlusJakartaSans-Bold',}}>Account No:</Text>
          <Text style={{color:"#fff", fontFamily: 'PlusJakartaSans-Bold', fontSize: 20}}>{item.account_no}  <Text style={{ fontWeight: 'bold' }}><TouchableWithoutFeedback onPress={() => copyToClipboard(item.account_no)}><Ionicons name={copyClip} style={{ fontSize: 16 }} /></TouchableWithoutFeedback></Text></Text>
          <Text style={{color:"#fff", fontFamily: 'PlusJakartaSans-Bold',}}>Account Name:</Text>
          <Text style={{color:"#fff", fontFamily: 'PlusJakartaSans-Bold', fontSize: 15}}>{item.account_name}</Text>
        </View>
        <View>
          <Text style={{color:"#fff", fontFamily: 'PlusJakartaSans-Bold',}}>Charges:</Text>
          <Text style={{color:"#fff", fontFamily: 'PlusJakartaSans-Bold', fontSize: 15}}>	&#8358;{item.charges}</Text>
          <Text style={{color:"#fff", fontFamily: 'PlusJakartaSans-Bold',}}>Bank Name:</Text>
          <Text style={{color:"#fff", fontFamily: 'PlusJakartaSans-Bold', fontSize: 15}}>{item.bank_name}</Text>
        </View>
      </View>
    </View>
  );

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
        <View style={styles.wrapper}>
          <Image source={require('../../assets/images/icon.png')} style={styles.icon}/>
          <View>
            <Text style={styles.subtitle}>
              Welcome! Abdurrahim,
            </Text>
            <Text style={styles.username}>aymmuazu</Text>
          </View>
        </View>

        <View style={styles.cardAccount}> 
            <Text style={styles.available}>Available Balance:</Text>
            <Text style={styles.balance}>
              {viewBalanceAmount ? "******" : "₦1,500.0"}
            </Text>

            <TouchableWithoutFeedback onPress={handleViewBalance}>
              <Ionicons style={styles.eyeText} name={viewBalanceName} />
            </TouchableWithoutFeedback>

            <TouchableOpacity style={{ 
                backgroundColor: '#fff',
                width: 130,
                borderRadius: 15,
                display: 'flex',
                marginLeft: 70,
                marginTop: 18,
                padding: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'}}
              >
                <Text style={{ fontFamily: 'PlusJakartaSans-Bold', marginBottom: 5 }}>
                  Fund Wallet
                </Text>
                <Ionicons color="#133eba" size={25} name='add-circle'/>
            </TouchableOpacity>
        </View>

        <View style={{ 
            display: 'flex',
            borderRadius: 20, 
            shadowColor: '#133eba', 
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25, 
            padding: 15,
            marginTop: 14,
            shadowRadius: 4, 
            elevation: 10, 
            backgroundColor: '#fff',  
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            alignContent: 'center' 
        }}>
            <CustomLinks title="Data" icon_name="wifi" handlePress="/data"/>
            <CustomLinks title="Airtime" icon_name="call" handlePress="/airtime"/>
            <CustomLinks title="Electricty" icon_name="bulb" handlePress="/electricity" />
            <CustomLinks title="Cable" icon_name="tv" handlePress="/cabletv"/>
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
    </SafeAreaView>
  )
}

export default Home;
