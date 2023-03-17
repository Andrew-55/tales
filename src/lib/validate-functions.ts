import validator from 'validator';

import {ERROR_MESSAGE} from '@app/constants';

export const checkIsEmail = (string: string) => {
  return validator.isEmail(string) ? undefined : ERROR_MESSAGE.email;
};

export const checkPasswordLength = (password: string) => {
  return password.length >= 5 ? undefined : ERROR_MESSAGE.passwordLength;
};

export const checkStringIsEmpty = (string: string) => {
  return string.trim().length ? undefined : ERROR_MESSAGE.required;
};
