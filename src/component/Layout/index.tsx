import {SafeAreaView, ViewStyle} from 'react-native';
import React from 'react';
import {Box} from 'native-base';

export type Props = {
  style?: ViewStyle;
  children: any;
};

const layout: React.FC<Props> = ({children, style}) => {
  return (
    <Box style={style}>
      <SafeAreaView>{children}</SafeAreaView>
    </Box>
  );
};

export default layout;
