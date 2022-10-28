import { StyleSheet, View, Text } from "react-native";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

export function MainLayout({ children }) {
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return (
    <View>
      <Text>LOADING APP</Text>
    </View>
    );
  } else {
    return <View style={styles.layout}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "tranparent",
    fontFamily: "Quicksand_500Medium !important",
    color: "#06112D",
  },
});
