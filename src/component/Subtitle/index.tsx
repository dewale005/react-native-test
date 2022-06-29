import {Text} from 'native-base';
import React from 'react';
import {StyleSheet, TextStyle} from 'react-native';

export type Props = {
  children: string | number | any;
  style?: TextStyle;
};

const subtitle: React.FC<Props> = ({style, children}) => {
  return (
    <Text style={{...style, ...styles.subtitleStyle}} fontSize="xs">
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  subtitleStyle: {
    color: '#828282',
  },
});

export default subtitle;
