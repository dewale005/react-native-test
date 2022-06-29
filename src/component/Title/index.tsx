import {Text} from 'native-base';
import React from 'react';
import {StyleSheet, TextStyle} from 'react-native';

export type Props = {
  children: string;
  style?: TextStyle;
};

const title: React.FC<Props> = ({style, children}) => {
  return (
    <Text style={{...style, ...styles.titleStyle}} fontSize="md">
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: '500',
    fontSize: 16,
  },
});

export default title;
