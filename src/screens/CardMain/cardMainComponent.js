import React from "react";
import { DashboardCardMain } from "./components/dashboardCards";
import { View, StyleSheet } from "react-native";

export function CardMain() {  
    return (
      <View style={styles.cardsMenu}>
        <DashboardCardMain iconName="av-timer" title="Abertos"/>
        <DashboardCardMain iconName="timelapse" title="Cancelados"/>
        <DashboardCardMain iconName="av-timer" title="Em processo"/>
        <DashboardCardMain iconName="timelapse" title="Completos"/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    cardsMenu: {
      display: 'flex',
      flexDirection:'row',
      width:300,
    },
  });