import React, { Component } from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import { Routes } from './src/routes'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 35 

export default function App() {
    return (
      <View style={styles.container}>
        <Routes/>
        <StatusBar barStyle="light-content" style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FB',
    paddingTop: statusBarHeight
  },
});
