import { useNavigation } from '@react-navigation/core';
import { Image, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Input } from '@ui-kitten/components';

import { Button, Text } from '@ui-kitten/components';

import { auth, db } from '../firebase';

const image = require('../img/BG.jpg');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('Dashboard');
      }
    });

    return unsubscribe;
  }, []);

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        db.collection('USERS').doc(userCredentials.user.uid).set({
          email,
          name,
        });
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
      })
      .catch((error) => alert(error.message));
  };
  return (
    <ImageBackground source={image} resizeMode='cover' style={styles.image}>
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.inputContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../img/g51.png')} />
            <Text style={styles.text}>Sign in to your account</Text>
          </View>
          <Input
            placeholder='Name'
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />

          <Input
            placeholder='Email'
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />

          <Input
            placeholder='Password'
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          <TouchableOpacity style={styles.forgot}>
            <Text style={styles.text}>Forgot Your Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.btn}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignup}
            style={[styles.btn, styles.btnOutline]}>
            <Text style={styles.btnOutlineText}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    marginTop: 10,
  },
  btnContainer: {
    // width: '60%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 40,
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    width: '80%',
  },
  btn: {
    backgroundColor: '#0782f9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  btnOutline: {
    backgroundColor: '#fff',
    marginTop: 5,
  },
  btnOutlineText: { color: '#0782f9', fontWeight: 'bold', fontSize: 16 },
  forgot: { textAlign: 'right', marginTop: 10, alignSelf: 'flex-end' },
  logo: {
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  logoContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
