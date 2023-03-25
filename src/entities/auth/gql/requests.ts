import {gql} from '@apollo/client';

export const LOGIN = gql`
  mutation login($input: SignInRequest!) {
    userSignIn(input: $input) {
      token
    }
  }
`;

export const REGISTRATION = gql`
  mutation createUser($user: SignUpRequest!) {
    userSignUp(input: $user) {
      token
    }
  }
`;
