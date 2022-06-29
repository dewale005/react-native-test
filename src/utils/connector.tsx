import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {Dispatch, SetStateAction} from 'react';

interface authPayload {
  email: string;
  password: string;
}

interface inventory {
  name: string;
  totalStock: number;
  price: number;
  description: string;
}

interface State {
  user: string | null;
  isAuthenticated: boolean;
  inventory: Array<inventory>;
  setValue: Dispatch<SetStateAction<State>>;
}

export const navigationRef = createNavigationContainerRef();

function navigate() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop());
  }
}
function navigateHome(name: string) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name));
  }
}

export const authenticate = async (payload: authPayload, context: State) => {
  try {
    await AsyncStorage.setItem('user', payload.email);
    context.setValue({
      ...context,
      user: payload.email,
      isAuthenticated: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const LogOut = async (context: State) => {
  try {
    await AsyncStorage.removeItem('user');
    context.setValue({
      ...context,
      user: '',
      isAuthenticated: false,
    });
  } catch (error) {
    console.log(error);
  }
};

export const AddItem = async (payload: inventory, context: State) => {
  try {
    let data: Array<inventory> = [];
    const jsonValue = await AsyncStorage.getItem('inventory');
    if (jsonValue) {
      data = JSON.parse(jsonValue);
    }
    let updatedData = [payload, ...data];
    console.log(updatedData);
    await AsyncStorage.setItem('inventory', JSON.stringify(updatedData));
    context.setValue({
      ...context,
      inventory: updatedData,
    });
    navigateHome('Home');
  } catch (error) {}
};

export const EditItems = async (
  payload: inventory,
  index: number,
  context: State,
) => {
  try {
    let data: Array<inventory> = [];
    const jsonValue = await AsyncStorage.getItem('inventory');
    if (jsonValue) {
      data = JSON.parse(jsonValue);
    }
    let updatedData = [...data];
    updatedData[index] = payload;
    await AsyncStorage.setItem('inventory', JSON.stringify(updatedData));
    context.setValue({
      ...context,
      inventory: updatedData,
    });
    navigate();
  } catch (error) {}
};

export const DeleteItems = async (index: number, context: State) => {
  try {
    let data: Array<inventory> = [];
    const jsonValue = await AsyncStorage.getItem('inventory');
    if (jsonValue) {
      data = JSON.parse(jsonValue);
    }
    let updatedData = [...data];
    updatedData.splice(index, 1);
    await AsyncStorage.setItem('inventory', JSON.stringify(updatedData));
    context.setValue({
      ...context,
      inventory: updatedData,
    });
    navigate();
  } catch (error) {}
};
