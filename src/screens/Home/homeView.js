import {StyleSheet, View, Text } from 'react-native';
import { MainLayout } from '../../layout/main/mainLayout'
import { Header } from '../../components/header/headerComponent'

export function HomeView() {
  return (
    <MainLayout>
      <Header />
    </MainLayout>
  );
}