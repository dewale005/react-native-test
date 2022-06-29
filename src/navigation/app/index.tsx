import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/home';
import {homeOptions} from '../../utils/screenOptions';
import Inventory from '../../screens/inventory';
import SideDrawerContent from '../../component/SIdebar';
// import HomeStack from './detail';

const Drawer = createDrawerNavigator();

export default function InnerApp() {
  return (
    <Drawer.Navigator
      drawerContent={props => <SideDrawerContent {...props} />}
      screenOptions={{
        drawerStatusBarAnimation: 'fade',
        drawerType: 'front',
      }}>
      <Drawer.Screen
        name="HomePage"
        component={Home}
        options={{
          ...homeOptions,
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="Add a new Item"
        component={Inventory}
        options={homeOptions}
      />
    </Drawer.Navigator>
  );
}
