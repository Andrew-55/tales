import * as EmailValidator from 'email-validator';
import {ERROR_MESSAGE} from '@app/constants';

export const checkIsEmail = (string: string) => {
  return EmailValidator.validate(string) ? undefined : ERROR_MESSAGE.email;
};

export const checkPasswordLength = (password: string) => {
  return password.length >= 5 ? undefined : ERROR_MESSAGE.passwordLength;
};
