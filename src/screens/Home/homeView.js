import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { MainLayout } from '../../layout/main/mainLayout'
import { Header } from '../../components/header/headerComponent'
import { MaterialIcons } from "@expo/vector-icons";

export function HomeView() {
  const IconButton = ({ title, onPress, icon }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{title}</Text>
      {icon}
    </TouchableOpacity>
  );

  return (
    <MainLayout>
      <Header />
      <View style={styles.container}>
      <IconButton
        title="Add Task"
        color="#06112D"
        icon={<MaterialIcons name="add-circle" style={styles.icons} />}
      />
      </View>
      <ScrollView>

      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 35,
    paddingRight: 35,
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons: {
    fontSize: 30,
    color: "#FFCE93",
    marginLeft: 2,
  },
});
