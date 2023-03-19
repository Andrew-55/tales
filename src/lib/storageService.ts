import AsyncStorage from '@react-native-async-storage/async-storage';

export const setTokenStore = async (token: string) => {
  await AsyncStorage.setItem('token', token);
};

export const getTokenStore = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};
