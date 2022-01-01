import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { auth } from '../firebase';

const HomeScreen = ({ route }) => {
  const navigation = useNavigation();

  // const { result } = route.params;

  const handleSignOut = () => {
    console.log('clicked');
    auth
      .signOut()
      .then(navigation.navigate('Login'))
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.btn} onPress={handleSignOut}>
        <Text style={styles.btnText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#0782f9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  btnText: { color: 'white', fontSize: 16 },
});
