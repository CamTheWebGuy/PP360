import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CustomersScreen from './screens/CustomersScreen';
import ViewCustomerScreen from './screens/ViewCustomer';

import 'react-native-gesture-handler';

import { auth, db } from './firebase';

import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Drawer,
  DrawerItem,
  Text,
  IndexPath,
  Divider,
} from '@ui-kitten/components';

const { Navigator, Screen } = createDrawerNavigator();

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';

const Stack = createNativeStackNavigator();

const header = () => {
  let [result, setResult] = useState({});
  useEffect(async () => {
    if (auth.currentUser) {
      let document = db.collection('USERS').doc(auth.currentUser.uid);
      let res = await document.get();

      setResult(res.data());
    }
  }, [auth.currentUser]);
  return (
    <View style={{ paddingLeft: 20 }}>
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/74.jpg' }}
        style={{ width: 80, height: 80, marginTop: 30, borderRadius: 100 }}
      />

      <Text style={{ fontWeight: 'bold', marginBottom: 5, marginTop: 10 }}>
        {result?.name}
      </Text>
      <Text style={{ marginBottom: 30 }}>{auth.currentUser?.email}</Text>
      <Divider />
    </View>
  );
};

const DrawerContent = ({ navigation, state }) => (
  <Drawer
    header={header}
    selectedIndex={new IndexPath(state.index - 1)}
    onSelect={(index) => navigation.navigate(state.routeNames[index.row + 1])}>
    <DrawerItem title='Dashboard' />
    <DrawerItem title='Customers' />
    <DrawerItem title='Work Orders' />
    <DrawerItem title='Route Manager' />
    <DrawerItem title='View My Route' />
    <DrawerItem title='Settings' />
  </Drawer>
);

export const DrawerNavigator = () => (
  <Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <Screen
      name='Login'
      options={{
        headerShown: false,
        swipeEnabled: false,
        gestureEnabled: false,
      }}
      component={LoginScreen}
    />
    <Screen name='Dashboard' component={HomeScreen} />
    <Screen name='Customers' component={CustomersScreen} />
    <Screen name='ViewCustomer' component={ViewCustomerScreen} />
  </Navigator>
);

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>

      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name='Login'
            component={LoginScreen}
          />
          <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
