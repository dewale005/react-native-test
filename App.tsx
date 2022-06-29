/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import React from 'react';
import MainApp from './src/navigation';
import {AppProvider} from './src/store/configureStore';

const App = () => {
  return (
    <NativeBaseProvider>
      <AppProvider>
        <MainApp />
      </AppProvider>
    </NativeBaseProvider>
  );
};

export default App;
