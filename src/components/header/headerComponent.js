import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { format } from "date-fns";
import { CardMain } from "../../screens/CardMain/cardMainComponent";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 35 

export function Header() {
  const [dateStatus, setDateStatus] = useState(new Date());

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>{format(dateStatus, "LLL dd, yyyy")}</Text>
          <MaterialIcons name="date-range" style={styles.icons} />
        </View>
        <MaterialIcons name="menu" style={styles.icons} />
      </View>
      <View style={styles.cardsMenu}>
        <CardMain />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: statusBarHeight,
    height: 400,
    borderBottomEndRadius: 48,
    borderBottomLeftRadius: 48,
  },
  navBar: {
    paddingLeft: 35,
    paddingRight: 35,
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons: {
    fontSize: 25,
    color: "#06112D",
    marginLeft: 10,
  },
  cardsMenu: {
    padding: 20,
    height: 275,
  },
});
