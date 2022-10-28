import React from "react";
import { DashboardCardMain } from "./components/dashboardCards";
import { View, StyleSheet } from "react-native";

export function CardMain() {
  return (
    <View style={{justifyContent:'center', alignItems: 'center'}}>
      <View style={styles.cardsMenu}>
        <DashboardCardMain iconName="loop" title="Abertos" bgColor={'#6146C6'} />
        <DashboardCardMain iconName="cancel" title="Cancelados" bgColor={'#FF6157'} />
      </View>
      <View style={styles.cardsMenu}>
        <DashboardCardMain iconName="av-timer" title="Em processo" bgColor={'#FFCE93'} />
        <DashboardCardMain iconName="beenhere" title="Completos" bgColor={'#61C877'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardsMenu: {
    display: "flex",
    flexDirection: "row",
    width: 360,
  },
});
