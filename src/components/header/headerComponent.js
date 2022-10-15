import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { format } from 'date-fns';

export function Header() {
  const [dateStatus, setDateStatus] = useState(new Date());

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text>{format(dateStatus, "LLL dd, yyyy")}</Text>
        <MaterialIcons name="date-range" size={30} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFEAA",
    height: 350,
    borderBottomEndRadius: 48,
    borderBottomLeftRadius: 48,
  },
  navBar: {
    backgroundColor: "red",
    padding:15,
    height: 75,
    flexDirection: 'row',
    alignItems: "center",
  },
});
