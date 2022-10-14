import React from "react"
import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFEAA',
        height: 350,
        borderBottomEndRadius:48,
        borderBottomLeftRadius:48
    },
    navBar: {
        backgroundColor: 'red',
        height: 75,
    },
});

export function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Text></Text>
            </View>
        </View>
    )
}
