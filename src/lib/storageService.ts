import AsyncStorage from '@react-native-async-storage/async-storage';

enum KEY_STORE {
  TOKEN = 'token',
}

export const setTokenStore = async (token: string) => {
  await AsyncStorage.setItem(KEY_STORE.TOKEN, token);
};

export const getTokenStore = async () => {
  const token = await AsyncStorage.getItem(KEY_STORE.TOKEN);
  return token;
};
