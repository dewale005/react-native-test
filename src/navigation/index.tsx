/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthApp from './authentication';
import AppContext from '../store/configureStore';
import HomeStack from './app/detail';
import {navigationRef} from '../utils/connector';

export default function MainApp() {
  const context = useContext(AppContext);
  const auth = context.isAuthenticated;

  return (
    <NavigationContainer ref={navigationRef}>
      {auth ? <HomeStack /> : <AuthApp />}
    </NavigationContainer>
  );
}
