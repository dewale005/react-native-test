import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import AppContext from '../../store/configureStore';
import {LogOut} from '../../utils/connector';

function SideDrawerContent(props: any) {
  const context = useContext(AppContext);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Log Out" onPress={() => LogOut(context)} />
    </DrawerContentScrollView>
  );
}

export default SideDrawerContent;
