import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export function DashboardCardMain({ iconName, title }) {
  return (
    <View style={styles.menuCard}>
      <View style={styles.menuIcon}>
        <MaterialIcons name={iconName} style={styles.icons} />
      </View>
      <View style={styles.menuTitle}>
        <Text>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuCard: {
    margin:10,
    backgroundColor:'white',
    height: 95,
    width: 140,
    borderRadius: 20,
  },
  menuIcon: {
    padding: 20,
    height: 15,
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: "center",
  },
  menuTitle: {
    height: 85,
  },
  icons: {
    fontSize: 25,
    color: "#06112D",
    marginLeft: 10,
  },
});
