import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>Hello World</Text>
      <Button title="Register" onPress={() => alert('Registration successful')}></Button>
    </SafeAreaView>
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
  }

});
