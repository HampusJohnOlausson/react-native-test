import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { render } from 'react-dom';

class App extends Component {

  render() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>Login</Text>
      <TextInput placeholder="Enter username..." style={styles.input} ></TextInput>
      <TextInput placeholder="Enter password..." style={styles.input} ></TextInput>
      <Button title="Login" onPress={() => alert('Registration successful')}></Button>
      <Text style={styles.text} >Dont have an account?</Text>
      <Text style={{color: 'lightblue', textDecoration: 'underline', fontSize: 20 }}
      onPress={() => Linking.openURL('')}>
      Sign up
      </Text>
    </View>
  )
  
}
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
    fontSize: 30,
    margin: 10
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    width: '60%',
    margin: 15,
    padding: 10,
    borderRadius: 15,
    outline: 'none'
  }, 
  text: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
  }

});


export default App
