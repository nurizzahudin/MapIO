import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    floatingButton: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#00BFFF",
    }
})

export default class FloatingButton extends Component {
    render() {
        return (
            <TouchableOpacity 
                style={styles.floatingButton}/>
        )
    }
}