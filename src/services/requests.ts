import {gql} from '@apollo/client';

export const USER_ME = gql`
  query userMe {
    avatarUrl
    email
    firstName
    birthDate
    country
    lastName
    middleName
    phone
    gender
  }
`;

export const LOGIN = gql`
  mutation login($input: SignInRequest!) {
    userSignIn(input: $input) {
      token
    }
  }
`;
