import {StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font'

export function MainLayout({ children }) {

  const [loaded] = useFonts({
    QuicksandSemiBold: require('./assets/fonts/static/Quicksand-SemiBold.ttf'),
    QuicksandRegular: require('./assets/fonts/static/Quicksand-Regular.ttf'),
    QuicksandLight: require('./assets/fonts/static/Quicksand-Light.ttf'),
    QuicksandMedium: require('./assets/fonts/static/Quicksand-Medium.ttf'),
    QuicksandBold: require('./assets/fonts/static/Quicksand-Bold.ttf'),
  });

  return (
    <View style={styles.layout}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: 'tranparent',
    fontFamily:'QuicksandSemiBold',
    color: '#06112D',
  },
});
