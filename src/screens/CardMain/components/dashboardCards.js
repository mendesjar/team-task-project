import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export function DashboardCardMain({ iconName, title, bgColor }) {
  const styles = StyleSheet.create({
    textwhite:{color: 'white'},
    menuCard: {
      margin: 10,
      backgroundColor: bgColor,
      height: 100,
      width: 160,
      borderRadius: 20,
      padding: 15,
      overflow: "hidden",
    },
    menuIcon: {
      height: 40,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    menuTitle: {
      height: 30,
      justifyContent: "flex-end",
    },
    icons: {
      fontSize: 25,
      color: "white",
      marginLeft: 10,
      alignItems: "flex-end",
    },
  });
  
  return (
    <View style={styles.menuCard}>
      <View style={styles.menuIcon}>
        <MaterialIcons name={iconName} style={styles.icons} />
      </View>
      <View style={styles.menuTitle}>
        <Text style={styles.textwhite}>{title}</Text>
      </View>
    </View>
  );
}


