import {Text} from 'native-base';
import React from 'react';
import {StyleSheet, TextStyle} from 'react-native';

export type Props = {
  children: string;
  style?: TextStyle;
};

const paragraph: React.FC<Props> = ({style, children}) => {
  return (
    <Text style={{...style, ...styles.paragraphStyle}} fontSize="sm">
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  paragraphStyle: {
    color: '#828282',
  },
});

export default paragraph;
