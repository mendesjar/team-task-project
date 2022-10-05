import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
    return (
      <View style={styles.container}>
        <Routes/>
        <StatusBar style="auto" />
      </View>
    );
}
