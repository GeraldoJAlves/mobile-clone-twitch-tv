import React from 'react';
import {StatusBar, View, Platform, Text } from 'react-native';

import Routes from './src/routes';

export default function App() {

  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : 0;
  return (
    <>
      <View style={{height:STATUSBAR_HEIGHT,backgroundColor:"#000" }} >
        <StatusBar barStyle="light-content" backgroundColor="#000" />
      </View>
      <Routes />
    </>
  );
}
