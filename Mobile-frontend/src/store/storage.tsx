import AsyncStorage from '@react-native-async-storage/async-storage';

export const reduxStorage = {
  setItem: async (key: string, value: any) => {
    await AsyncStorage.setItem(key, value);
    return true;
  },

  getItem: async (key: string) => {
    const value = await AsyncStorage.getItem(key);
    return value;
  },

  removeItem: async (key: string) => {
    await AsyncStorage.removeItem(key);
    return true;
  },
};