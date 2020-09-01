import React from 'react';
import {StatusBar, View, Platform, Text } from 'react-native';

import Routes from './src/routes';

export default function App() {

  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : 0;
  const STATUSBAR_COLOR = "#000";
  return (
    <>
      <View style={{height:STATUSBAR_HEIGHT,backgroundColor:STATUSBAR_COLOR}} >
        <StatusBar barStyle="light-content" backgroundColor={STATUSBAR_COLOR} />
      </View>
      <Routes />
    </>
  );
}
