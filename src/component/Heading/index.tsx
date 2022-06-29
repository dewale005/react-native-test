import {Heading} from 'native-base';
import React from 'react';
import {TextStyle} from 'react-native';

export type Props = {
  children: string;
  style?: TextStyle;
};

const heading: React.FC<Props> = ({style, children}) => {
  return (
    <Heading style={style} fontSize="2xl">
      {children}
    </Heading>
  );
};

export default heading;
