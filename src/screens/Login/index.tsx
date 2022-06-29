//import libraries
import {
  Box,
  FormControl,
  HStack,
  VStack,
  WarningOutlineIcon,
} from 'native-base';
import React, {useContext} from 'react';
import {Button, Heading, Page, Paragraph, TextInput} from '../../component';
import {useForm, Controller} from 'react-hook-form';
import AppContext from '../../store/configureStore';
import {authenticate} from '../../utils/connector';

// create a component
const Login: React.FC<any> = () => {
  const context = useContext(AppContext);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = (data: any) => authenticate(data, context);

  return (
    <Page>
      <Box px="5">
        <Box>
          <Heading>Hi, Welcome Back! 👋</Heading>
          <Paragraph>Hello again you've been missed!</Paragraph>
        </Box>
        <VStack mt="1/6" space="2">
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <FormControl isInvalid={errors.email ? true : false}>
                <FormControl.Label>Email</FormControl.Label>
                <TextInput
                  py="4"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  keyboardType="email-address"
                  value={value}
                  placeholder="Enter your email"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {errors.email?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            )}
            name="email"
            rules={{
              required: 'Email cannot be empty',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'A valid email is required',
              },
            }}
          />

          <Controller
            control={control}
            rules={{
              required: 'Password is required',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <FormControl isInvalid={errors.password ? true : false}>
                <FormControl.Label>Password</FormControl.Label>
                <TextInput
                  py="4"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  type="password"
                  placeholder="Please Enter Your Password"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {errors.password?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            )}
            name="password"
          />
          <HStack justifyContent="flex-end">
            <Button variant="ghost">Forgot Password?</Button>
          </HStack>
          <Button width="full" onPress={handleSubmit(onSubmit)}>
            Login
          </Button>
        </VStack>
      </Box>
    </Page>
  );
};
//make this component available to the app
export default Login;
