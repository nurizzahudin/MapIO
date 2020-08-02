/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { StyleSheet, View } from "react-native";
import Map from "./components/map"; 

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Map />
      </View>
    );
  }
}