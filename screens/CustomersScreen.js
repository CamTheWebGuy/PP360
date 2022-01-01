import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {
  Divider,
  List,
  ListItem,
  BottomNavigation,
  BottomNavigationTab,
  Input,
  Button,
} from '@ui-kitten/components';

import { Ionicons } from '@expo/vector-icons';

import { db, auth } from '../firebase';

const CustomersScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [customerState, setCustomerState] = useState('');
  const [customerZip, setCustomerZip] = useState('');
  const [customerGate, setCustomerGate] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const [customersList, setCustomersList] = useState([]);

  useEffect(async () => {
    await db
      .collection('CUSTOMERS')
      .where('owner', '==', auth.currentUser.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const result = doc.data();
          const customer = {
            name: result.name,
            email: result.email,
            phone: result.phone,
            address: result.address,
            city: result.city,
            state: result.state,
            zip: result.zip,
            gateCode: result.gate,
          };
          setCustomersList((oldArray) => [...oldArray, customer]);
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }, []);

  const addCustomer = async () => {
    setIsLoading(true);
    await db.collection('CUSTOMERS').doc().set({
      owner: auth.currentUser?.uid,
      email: customerEmail,
      name: customerName,
      phone: customerPhone,
      address: customerAddress,
      city: customerCity,
      state: customerState,
      zip: customerZip,
      gateCode: customerGate,
    });
    setIsLoading(false);
    setCustomerName('');
    setCustomerEmail('');
    setCustomerPhone('');
    setCustomerAddress('');
    setCustomerCity('');
    setCustomerState('');
    setCustomerZip('');
    setCustomerGate('');
  };

  const data = [
    { title: 'Rachel West', description: '650 Depaul Dr' },
    { title: 'Troy Miller', description: '1249 Blossom Hill Rd' },
    { title: 'Peter Crawford', description: '9738 Adams St' },
    { title: 'Shannon Hopkins', description: '2773 James St' },
    { title: 'Russell Hill', description: '9883 Cackson St' },
    { title: 'Charlene Fernandez', description: '6902 Locust Rd' },
    { title: 'Craig Martin', description: '5983 Nowlin Rd' },
  ];
  const renderArrow = () => (
    <Ionicons name='chevron-forward-outline' size={22} color='gray' />
  );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.name}`}
      description={`${item.address}`}
      accessoryRight={renderArrow}
    />
  );

  return (
    <View style={styles.container}>
      {selectedIndex === 0 ? (
        <View style={{ flex: 1 }}>
          <List
            data={customersList}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
          />
        </View>
      ) : (
        <KeyboardAvoidingView
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
          behavior='padding'
          keyboardVerticalOffset={100}>
          <Text style={{ marginTop: 30 }}>Add New Customer:</Text>
          <ScrollView style={{ width: '100%' }}>
            <Input
              style={styles.input}
              value={customerName}
              placeholder='Walt Disney'
              label='Full Name'
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <Input
              style={styles.input}
              value={customerEmail}
              placeholder='walt@disney.com'
              label='Email'
              onChange={(e) => setCustomerEmail(e.target.value)}
            />
            <Input
              style={styles.input}
              value={customerPhone}
              placeholder='555-555-5555'
              label='Phone Number'
              onChange={(e) => setCustomerPhone(e.target.value)}
            />
            <Input
              style={styles.input}
              value={customerAddress}
              placeholder='1600 Pennsylvania Avenue NW'
              label='Street Address'
              onChange={(e) => setCustomerAddress(e.target.value)}
            />
            <Input
              style={styles.input}
              value={customerCity}
              placeholder='Washington'
              label='City'
              onChange={(e) => setCustomerCity(e.target.value)}
            />
            <Input
              style={styles.input}
              value={customerState}
              placeholder='DC'
              label='State'
              onChange={(e) => setCustomerState(e.target.value)}
            />
            <Input
              style={styles.input}
              value={customerZip}
              placeholder='20500'
              label='Zip'
              onChange={(e) => setCustomerZip(e.target.value)}
            />
            <Input
              style={styles.input}
              value={customerGate}
              placeholder='1234'
              label='Gate/Lock Code'
              onChange={(e) => setCustomerGate(e.target.value)}
            />
            <Button style={{ marginTop: 30 }} onPress={() => addCustomer()}>
              {!isLoading ? (
                <Text>Save Customer</Text>
              ) : (
                <Text>Processing...</Text>
              )}
            </Button>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
      <View style={styles.btmNav}>
        <BottomNavigation
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}>
          <BottomNavigationTab
            title='CUSTOMERS'
            icon={() => <Ionicons name='people' size={22} color='gray' />}
          />
          <BottomNavigationTab
            title='ADD CUSTOMER'
            icon={() => <Ionicons name='add-circle' size={22} color='gray' />}
          />
        </BottomNavigation>
      </View>
    </View>
  );
};

export default CustomersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  btmNav: {
    height: 70,
    backgroundColor: '#fff',
  },
  input: {
    marginTop: 10,
  },
});
