import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
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
  Spinner,
  Select,
  SelectItem,
  IndexPath,
} from '@ui-kitten/components';

import { Ionicons } from '@expo/vector-icons';

import { db, auth } from '../firebase';

import PoolPump from '../components/PoolPump';
import PoolFilter from '../components/PoolFilter';
import PoolHeater from '../components/PoolHeater';
import PoolCleaner from '../components/PoolCleaner';

const CustomersScreen = () => {
  const navigation = useNavigation();
  const [equipmentEditor, setEquipmentEditor] = useState(false);
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
  const [pumpInfo, setPumpInfo] = useState('');
  const [filterInfo, setFilterInfo] = useState('');
  const [heaterInfo, setHeaterInfo] = useState('');
  const [cleanerInfo, setCleanerInfo] = useState('');
  const [gallons, setGallons] = useState('');

  const [poolType, setPoolType] = useState('Inground Pool');
  const [typeIndex, setTypeIndex] = useState(new IndexPath(0));

  const types = ['Inground Pool', 'Above Ground Pool', 'Commercial'];

  useEffect(async () => {
    await db
      .collection('CUSTOMERS')
      .where('owner', '==', auth.currentUser.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const result = doc.data();
          const customer = {
            owner: result.owner,
            id: doc.id,
            name: result.name,
            email: result.email,
            phone: result.phone,
            address: result.address,
            city: result.city,
            state: result.state,
            zip: result.zip,
            gateCode: result.gate,
            poolType: result.poolType,
            poolPump: result.poolPump,
            poolCleaner: result.poolCleaner,
            poolHeater: result.poolHeater,
            poolFilter: result.poolFilter,
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
      poolGallons: gallons,
      poolType: poolType,
      poolCleaner: cleanerInfo,
      poolPump: pumpInfo,
      poolHeater: heaterInfo,
      poolFilter: filterInfo,
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
    setPumpInfo('');
    setCleanerInfo('');
    setFilterInfo('');
    setHeaterInfo('');
    setCustomersList([]);

    await db
      .collection('CUSTOMERS')
      .where('owner', '==', auth.currentUser.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const result = doc.data();
          const customer = {
            owner: result.owner,
            id: doc.id,
            name: result.name,
            email: result.email,
            phone: result.phone,
            address: result.address,
            city: result.city,
            state: result.state,
            zip: result.zip,
            gateCode: result.gate,
            poolType: result.poolType,
            poolPump: result.poolPump,
            poolCleaner: result.poolCleaner,
            poolHeater: result.poolHeater,
            poolFilter: result.poolFilter,
          };
          setCustomersList((oldArray) => [...oldArray, customer]);
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });

    setSelectedIndex(0);
  };

  useEffect(() => {
    setPoolType(types[typeIndex.row]);
  }, [typeIndex]);

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

  const viewCustomer = (e) => {
    navigation.navigate('ViewCustomer', { customer: e });
  };

  const renderOption = (title) => (
    <SelectItem key={title.toString()} title={title.toString()} />
  );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.name}`}
      description={`${item.address}`}
      accessoryRight={renderArrow}
      onPress={() => viewCustomer(item)}
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
            <Button
              onPress={() => setEquipmentEditor(!equipmentEditor)}
              accessoryLeft={() => (
                <Ionicons
                  name={!equipmentEditor ? 'create' : 'close'}
                  size={15}
                  color='white'
                />
              )}
              style={{ marginTop: 30 }}>
              {!equipmentEditor ? 'Add Equipment' : 'Add Equipment Later'}
            </Button>

            {equipmentEditor ? (
              <View style={{ marginTop: 20 }}>
                <Input
                  placeholder='10000'
                  label='How Many Gallons Is This Pool?'
                  value={gallons}
                  onChange={(e) => setGallons(e.target.value)}
                />
                <Select
                  style={{ marginTop: 10 }}
                  value={poolType}
                  selectedIndex={typeIndex}
                  onSelect={(index) => setTypeIndex(index)}
                  label='Pool Type:'>
                  {types.map(renderOption)}
                </Select>
                <PoolPump setPumpInfo={setPumpInfo} />
                <PoolFilter setFilterInfo={setFilterInfo} />
                <PoolHeater setHeaterInfo={setHeaterInfo} />
                <PoolCleaner setCleanerInfo={setCleanerInfo} />
              </View>
            ) : (
              <View></View>
            )}

            <Button
              status='success'
              style={{ marginTop: 30 }}
              onPress={() => addCustomer()}
              accessoryLeft={() =>
                !isLoading ? (
                  <Ionicons name='save' size={18} color='white' />
                ) : (
                  <Spinner size='small' />
                )
              }
              disabled={isLoading}>
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
