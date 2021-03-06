import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './app/components/screens/MainScreen'

export default class App extends React.Component {
  render() {
    return (
      <MainScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
