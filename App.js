import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>Sign in</Text>
      <TextInput placeholder="Enter username..." style={styles.input} ></TextInput>
      <TextInput placeholder="Enter password..." style={styles.input} ></TextInput>
      <Button title="Log In" onPress={() => alert('Registration successful')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#223343',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    margin: 10
  },
  input: {
    backgroundColor: '#fff',
    height: 30,
    margin: 10,
    padding: 10,
    borderRadius: 20
  }

});
