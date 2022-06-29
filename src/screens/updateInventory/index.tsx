//import libraries
import {
  Box,
  FormControl,
  ScrollView,
  TextArea,
  VStack,
  WarningOutlineIcon,
} from 'native-base';
import React, {useContext} from 'react';
import {Alert, SafeAreaView} from 'react-native';
import {Button, Page, TextInput} from '../../component';
import AppContext from '../../store/configureStore';
import {useForm, Controller} from 'react-hook-form';
import {DeleteItems, EditItems} from '../../utils/connector';

// create a component
const InventoryUpdate: React.FC<any> = props => {
  console.log(props.route);
  const context = useContext(AppContext);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: props.route.params.name,
      totalStock: props.route.params.totalStock,
      price: props.route.params.price,
      description: props.route.params.description,
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    EditItems(data, props.route.params.index, context);
  };

  const deletConfirm = () => {
    // eslint-disable-next-line no-sparse-arrays
    Alert.alert('Warning', 'Are you sure you want to perform this action', [
      {text: 'NO'},
      {
        text: 'Yes',
        onPress: deleteData,
      },
      ,
    ]);
  };

  const deleteData = () => DeleteItems(props.route.params.index, context);

  return (
    <Page>
      <SafeAreaView>
        <Box mt="5" px="5">
          <ScrollView>
            <VStack space="2">
              <Controller
                control={control}
                rules={{
                  required: 'Name is required',
                  //   validate: {
                  //     value: value => value.split(' ').length < 3,
                  //     message: () => 'Name has already been taken',
                  //   },
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <FormControl isInvalid={errors.name ? true : false}>
                    <FormControl.Label>Name</FormControl.Label>
                    <TextInput
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      py="4"
                      placeholder="Enter Inventory Name"
                    />
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}>
                      {errors.name?.message}
                    </FormControl.ErrorMessage>
                  </FormControl>
                )}
                name="name"
              />

              <Controller
                control={control}
                rules={{
                  required: 'Total Stock is required',
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: 'Total Stock must be a number',
                  },
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <FormControl isInvalid={errors.totalStock ? true : false}>
                    <FormControl.Label>Total</FormControl.Label>
                    <TextInput
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      py="4"
                      keyboardType="number-pad"
                      placeholder="Enter Inventory Total Stock"
                    />
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}>
                      {errors.totalStock?.message}
                    </FormControl.ErrorMessage>
                  </FormControl>
                )}
                name="totalStock"
              />
              <Controller
                control={control}
                rules={{
                  required: 'Price is required',
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: 'Price must be a number',
                  },
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <FormControl isInvalid={errors.price ? true : false}>
                    <FormControl.Label>Unit Price</FormControl.Label>
                    <TextInput
                      py="4"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      keyboardType="number-pad"
                      placeholder="Enter Inventory Unit Price"
                    />
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}>
                      {errors.price?.message}
                    </FormControl.ErrorMessage>
                  </FormControl>
                )}
                name="price"
              />

              <Controller
                control={control}
                rules={{
                  required: 'Description is required',
                  //   validate: {
                  //     value: value => value.split(' ').length < 3,
                  //     message: () => 'Description should be at least 3 words',
                  //   },
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <FormControl isInvalid={errors.description ? true : false}>
                    <FormControl.Label>Description</FormControl.Label>
                    <TextArea
                      h={40}
                      py="4"
                      isInvalid={errors.description ? true : false}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder="Enter Inventory Unit Price"
                      autoCompleteType=""
                    />
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}>
                      {errors.description?.message}
                    </FormControl.ErrorMessage>
                  </FormControl>
                )}
                name="description"
              />
              <Button mt="2" width="full" onPress={handleSubmit(onSubmit)}>
                Save
              </Button>
              <Button
                mt="2"
                colorScheme="red"
                width="full"
                onPress={deletConfirm}>
                Delete
              </Button>
            </VStack>
          </ScrollView>
        </Box>
      </SafeAreaView>
    </Page>
  );
};
//make this component available to the app
export default InventoryUpdate;
