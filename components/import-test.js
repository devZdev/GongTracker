/**
 * Import Test
 * Should be importable in both android and ios
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export class ImportTest extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'yellow'}}>
        <View style={{flexDirection: 'row', height: 100, padding: 20}}>
          <TouchableOpacity style={{backgroundColor: 'green', flex: 1}} />
        </View>
      </View>
    );
  }
}
