/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
MapboxGL.setAccessToken("pk.eyJ1IjoiZ2FtZW92ZXIiLCJhIjoicWFLdlBoYyJ9.EmU-s7wtfdTpVAX0SegFaw");

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default class Map extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    return (
      <MapboxGL.MapView style={styles.map} />
    );
  }
}