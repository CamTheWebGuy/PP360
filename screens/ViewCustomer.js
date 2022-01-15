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
} from '@ui-kitten/components';

const ViewCustomer = ({ route }) => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { customer } = route.params;
  const image = require('../img/BG.jpg');
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
              accessoryLeft={() => (
                <Ionicons name='close' size={15} color='white' />
              )}>
              Delete Customer
            </Button>
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
});
