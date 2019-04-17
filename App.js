/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import createAppContainer from './src/Routes/routes';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MyFooter from './src/Components/footer';

const Route = createAppContainer;


type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <Route />
        <MyFooter />
      </View>

    );
  }
}