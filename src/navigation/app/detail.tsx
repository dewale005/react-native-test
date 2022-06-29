import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {homeOptions} from '../../utils/screenOptions';
import InventoryUpdate from '../../screens/updateInventory';
import InnerApp from '.';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: false,
      }}>
      <Stack.Screen
        name="Home"
        component={InnerApp}
        options={{
          ...homeOptions,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Edit An Item"
        component={InventoryUpdate}
        options={{
          headerTransparent: false,
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
    </Stack.Navigator>
  );
}
