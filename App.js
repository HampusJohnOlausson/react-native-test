import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const apiuri = "http://www.omdbapi.com/?i=tt3896198&apikey=c50cef57";
  const [state, setState] = useState({
    s: "Enter a movie...",
    results: [],
    selected: {}
  });


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie DB</Text>
      <StatusBar style="auto" />
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
});
