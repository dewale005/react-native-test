/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

type Props = {
  children: React.ReactNode;
};

type inventory = {
  name: string;
  totalStock: number;
  price: number;
  description: string;
};

type State = {
  user: string | null;
  isAuthenticated: boolean;
  inventory: Array<inventory>;
  setValue: Dispatch<SetStateAction<State>>;
};

const initialState = {
  user: '',
  isAuthenticated: false,
  inventory: [],
  setValue: (): void => {
    throw new Error('setValue function must be overridden');
  },
};

const AppContext = createContext<State>(initialState);

export const AppProvider = ({children}: Props): JSX.Element => {
  const [value, setValue] = useState<State>(initialState);

  const isAuthenticated = async () => {
    try {
      let email = await AsyncStorage.getItem('user');
      let data: Array<inventory> = [];
      let resp = await AsyncStorage.getItem('inventory');
      if (resp) {
        data = JSON.parse(resp);
      }
      setValue({
        user: email ? email : '',
        isAuthenticated: email ? true : false,
        inventory: data,
        setValue: (): void => {
          throw new Error('setValue function must be overridden');
        },
      });
      console.log(value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const auth = async () => await isAuthenticated();
    auth();
  }, []);

  return (
    <AppContext.Provider value={{...value, setValue}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
