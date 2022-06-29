//import libraries
import {Box} from 'native-base';
import React, {useContext} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Card, Page} from '../../component';
import AppContext from '../../store/configureStore';

// create a component
const Home: React.FC<any> = ({navigation}) => {
  const context = useContext(AppContext);
  const renderItem = (_data: any) => (
    <Card
      index={_data.index}
      name={_data.item.name}
      navigation={navigation}
      price={_data.item.price}
      totalStock={_data.item.totalStock}
      description={_data.item.description}
    />
  );
  return (
    <Page>
      <SafeAreaView>
        <Box p="1">
          <FlatList data={context.inventory} renderItem={renderItem} />
        </Box>
      </SafeAreaView>
    </Page>
  );
};
//make this component available to the app
export default Home;
