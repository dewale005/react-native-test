/* eslint-disable react-native/no-inline-styles */
import {Box, Divider, HStack} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Heading, Paragraph, Subtitle} from '..';

export type Props = {
  index: number;
  name: string;
  totalStock: number;
  price: number;
  description: string;
  navigation: any;
};

const card: React.FC<Props> = ({
  index,
  name,
  totalStock,
  price,
  description,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Edit An Item', {
          index,
          name,
          totalStock,
          price,
          description,
        })
      }>
      <View
        style={{backgroundColor: '#ffffff', marginBottom: 10, borderRadius: 6}}>
        <Box p="3">
          <HStack justifyContent="space-between">
            <Heading style={{fontSize: 18}}>{name}</Heading>
            <Subtitle>{price}</Subtitle>
          </HStack>
          <Paragraph>{description}</Paragraph>
          <Divider mt="2" mb="2" />
          <Subtitle style={{fontWeight: '700'}}>{totalStock} in Stock</Subtitle>
        </Box>
      </View>
    </TouchableOpacity>
  );
};

export default card;
