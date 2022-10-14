import {StyleSheet, View, Text } from 'react-native';

export function MainLayout({ children }) {
  return (
    <View style={{ backgroundColor: '#F5F6FB' }}>
      {children}
    </View>
  );
}