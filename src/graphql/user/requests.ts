import {gql} from '@apollo/client';

export const USER_FRAGMENT = gql`
  fragment UserFragment on UserModel {
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

export const USER_ME = gql`
  ${USER_FRAGMENT}
  query me {
    userMe {
      ...UserFragment
    }
  }
`;

export const EDIT_PROFILE = gql`
  ${USER_FRAGMENT}
  mutation editProfile($input: EditProfileRequest!) {
    userEditProfile(input: $input) {
      user {
        ...UserFragment
      }
    }
  }
`;
