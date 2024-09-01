// import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Platform} from 'react-native';

export const storeValue = async (property: string, value: string) => {
  try {
    await AsyncStorage.setItem(property, value);
  } catch (error) {
    return error;
  }
};

export const retrieveValue = async (property: string) => {
  try {
    const session = await AsyncStorage.getItem(property);
    if (session !== undefined) {
      return session;
    }
  } catch (error) {
    return error;
  }
};

export const removeValue = async (property: string) => {
  try {
    await AsyncStorage.removeItem(property);
  } catch (error) {
    return error;
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    return error;
  }
};