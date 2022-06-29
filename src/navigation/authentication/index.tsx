import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import {loginOptions} from '../../utils/screenOptions';

const Stack = createNativeStackNavigator();

export default function AuthApp() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Login} options={loginOptions} />
    </Stack.Navigator>
  );
}
