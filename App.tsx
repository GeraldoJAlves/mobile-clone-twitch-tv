import StatusBar from '@react-native-community/status-bar';
import React from 'react';

import Routes from './src/routes';

export default function App() {
 
  return (
    <>
      <Routes />
      <StatusBar />

    </>
  );
}