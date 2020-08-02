import React, { Component } from 'react';
import { StyleSheet, View } from "react-native";

const style = StyleSheet.create({
    slot: {
        margin: 10,
        position: "absolute",
    },
    topLeft: {
        top: 0,
        left: 0
    },
    topRight: {
        top: 0,
        right: 0
    },
    bottomLeft: {
        bottom: 0,
        left: 0
    },
    bottomRight: {
        bottom: 0,
        right: 0
    }
})

export default class Slot extends Component {
    render() {
        const position = this.props.position || "topLeft";
        return(
            <View style={Object.assign({}, style.slot, style[position])}>
                { this.props.children }
            </View>
        )
    }
}