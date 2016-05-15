/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { ImportTest } from './components/import-test'

class GongTracker extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#000'}}>
        <Text style={styles.welcome}>
          Gong Tracker for Android
        </Text>
        <View style={{flexDirection: 'row', height: 100, padding: 20}}>
          <TouchableOpacity style={{backgroundColor: 'blue', flex: 0.5}} />
          <TouchableOpacity style={{backgroundColor: 'red', flex: 0.5}} />
        </View>
        <ImportTest />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GongTracker', () => GongTracker);
