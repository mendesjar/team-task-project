import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Routes } from './src/routes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FB'
  },
});

export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        <Routes/>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
}
