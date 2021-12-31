import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';

import { auth } from './firebase';

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
  return (
    <View style={{ paddingLeft: 20 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 5, marginTop: 30 }}>
        {auth.currentUser?.name}
      </Text>
      <Text style={{ marginBottom: 30 }}>{auth.currentUser?.email}</Text>
      <Divider />
    </View>
  );
};

const DrawerContent = ({ navigation, state }) => (
  <Drawer
    header={header}
    selectedIndex={new IndexPath(state.index)}
    onSelect={(index) => navigation.navigate(state.routeNames[index.row])}>
    <DrawerItem title='Users' />
    <DrawerItem title='Orders' />
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
