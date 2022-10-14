import {StyleSheet, View, Text } from 'react-native';

export function MainLayout({ children }) {
  return (
    <View style={{ backgroundColor: 'tranparent' }}>
      {children}
    </View>
  );
}