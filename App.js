import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=c50cef57";
  const [state, setState] = useState({
    s: "Enter a movie...",
    results: [],
    selected: {}
  });

  const search = () => {
    axios(apiurl + "&s=" + state.s).then(({ data }) => {
      let results = data.Search
      setState(prevState => {
        return {...prevState, results: results}
      })
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Time</Text>
      <TextInput 
      style={styles.searchbox}
      onChangeText={text => setState(prevState => {
        return {...prevState, s: text}
      })}
      onSubmitEditing={search}
      value={state.s}
      />
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
    color: '#ffffff',
    fontSize: 20
  },
  searchbox: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    fontSize: 20,
    width: 200,
    margin: 10,
    padding: 10,

  }
});
