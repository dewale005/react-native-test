import React from 'react';
import {Avatar} from 'native-base';

export const homeOptions = {
  headerRightContainerStyle: {
    paddingRight: 15,
  },
  headerTitleContainerStyle: {
    paddingLeft: 15,
  },
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerRight: () => (
    <Avatar size="sm" bg="blue.500">
      {'O'}
    </Avatar>
  ),
};

export const loginOptions = {
  headerTitle: '',
  headerTransparent: true,
  headerLeft: () => null,
};
