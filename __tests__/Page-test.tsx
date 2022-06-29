/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Login from '../src/screens/Login';
import Home from '../src/screens/home';
import Inventory from '../src/screens/inventory';
import InventoryUpdate from '../src/screens/updateInventory';

it('Login Page renders correctly', () => {
  renderer.create(<Login />);
});

it('Home Page renders correctly', () => {
  renderer.create(<Home />);
});

it('Inventory Page renders correctly', () => {
  renderer.create(<Inventory />);
});

it('Update Inventory Page renders correctly', () => {
  renderer.create(<InventoryUpdate />);
});
