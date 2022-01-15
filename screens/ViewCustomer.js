import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import {
  Avatar,
  Button,
  Divider,
  ListItem,
  TabBar,
  Tab,
  Modal,
  Card,
} from '@ui-kitten/components';

import { db, auth } from '../firebase';

const ViewCustomer = ({ route }) => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const { customer } = route.params;
  const image = require('../img/BG.jpg');

  const deleteCustomer = async () => {
    const res = await db.collection('CUSTOMERS').doc(customer.id).get();

    //Check to see if result has owner or allowed field equal to the user making the request

    const result = res.data();

    if (
      result.owner === auth.currentUser.uid ||
      result.allowed.includes(auth.currentUser.uid)
    ) {
      await db.collection('CUSTOMERS').doc(customer.id).delete();
      setSelectedIndex(0);
      setVisible(false);
      navigation.navigate('Customers');
    } else {
      alert('User Not Authorized To Perform This Action');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 200 }}>
        <ImageBackground source={image} resizeMode='cover' style={styles.image}>
          <Text style={styles.header}>
            {selectedIndex === 0
              ? 'Customer Information'
              : selectedIndex === 1
              ? 'Equipment Information'
              : 'Work Orders'}
          </Text>
          <Button
            size='small'
            status='basic'
            accessoryLeft={() => (
              <Ionicons name='arrow-back-circle' size={15} color='black' />
            )}
            onPress={() => {
              setSelectedIndex(0);
              navigation.navigate('Customers');
            }}>
            Go Back
          </Button>
        </ImageBackground>
        <TabBar
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
          style={{ height: 50 }}>
          <Tab title='INFO' />
          <Tab title='EQUIPMENT' />
          <Tab title='WORK ORDERS' />
        </TabBar>
      </View>
      {selectedIndex === 0 ? (
        <View>
          <ScrollView>
            <ListItem title='Customer Name:' description={customer.name} />
            <Divider />
            <ListItem
              title='Service Address:'
              description={
                customer.address +
                ', ' +
                customer.city +
                ', ' +
                customer.state +
                ' ' +
                customer.zip
              }
            />
            <Divider />
            <ListItem title='Customer Email:' description={customer.email} />
            <Divider />
            <ListItem title='Customer Phone:' description={customer.phone} />
            {customer.gateCode ? (
              <View>
                <Divider />
                <ListItem
                  title='Gate/Lock Code:'
                  description={customer.gateCode}
                />
              </View>
            ) : (
              <View></View>
            )}
            <Button
              style={{ marginTop: 30 }}
              accessoryLeft={() => (
                <Ionicons name='create' size={15} color='white' />
              )}>
              Edit Customer
            </Button>
            <Button
              style={{ marginTop: 15 }}
              status='danger'
              onPress={() => setVisible(true)}
              accessoryLeft={() => (
                <Ionicons name='close' size={15} color='white' />
              )}>
              Delete Customer
            </Button>

            <Modal
              visible={visible}
              backdropStyle={styles.backdrop}
              onBackdropPress={() => setVisible(false)}>
              <Card disabled={true}>
                <Text>
                  Are you sure you want to delete this customer? This action
                  cannot be undone.
                </Text>
                <Button
                  style={{ marginTop: 10 }}
                  status='danger'
                  onPress={() => deleteCustomer()}>
                  Delete Customer
                </Button>
                <Button
                  style={{ marginTop: 10 }}
                  status='basic'
                  onPress={() => setVisible(false)}>
                  Cancel
                </Button>
              </Card>
            </Modal>
          </ScrollView>
        </View>
      ) : selectedIndex === 1 ? (
        <ScrollView>
          {customer.poolType ? (
            <View>
              <ListItem
                title='Pool Gallons:'
                description={customer.poolGallons}
              />
              <Divider />
              <ListItem title='Pool Type:' description={customer.poolType} />
              <Divider />
              <ListItem title='Pool Pump:' description={customer.poolPump} />
              <Divider />
              <ListItem
                title='Pool Cleaner:'
                description={customer.poolCleaner}
              />
              <Divider />
              <ListItem
                title='Pool Filter:'
                description={customer.poolFilter}
              />
              <Divider />
              <ListItem
                title='Pool Heater:'
                description={customer.poolHeater}
              />
              <Divider />
              <Button
                style={{ marginTop: 30 }}
                accessoryLeft={() => (
                  <Ionicons name='create' size={15} color='white' />
                )}>
                Edit Equipment
              </Button>
            </View>
          ) : (
            <Text style={{ textAlign: 'center', marginTop: 30 }}>
              No Equipment Found...
            </Text>
          )}
        </ScrollView>
      ) : (
        <ScrollView>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              paddingVertical: 30,
            }}>
            No work orders found...
          </Text>
          <Button
            accessoryLeft={() => (
              <Ionicons name='create' size={15} color='white' />
            )}>
            Add a Work Order
          </Button>
        </ScrollView>
      )}
    </View>
  );
};

export default ViewCustomer;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 20,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
