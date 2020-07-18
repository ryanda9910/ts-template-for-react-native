import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainApp from './src/routes/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainApp />
    </SafeAreaProvider>
  );
}
