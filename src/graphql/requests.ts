import {gql} from '@apollo/client';

export const USER_ME = gql`
  query me {
    userMe {
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
  }
`;

export const GET_POSTS = gql`
  query getPosts($input: FindPostsRequest!) {
    posts(input: $input) {
      data {
        id
        author {
          avatarUrl
          firstName
          lastName
        }
        createdAt
        title
        description
        isLiked
        likesCount
        mediaUrl
      }
    }
  }
`;

export const GET_MY_POSTS = gql`
  query getMyPosts($input: FindMyPostsRequest!) {
    myPosts(input: $input) {
      data {
        id
        author {
          avatarUrl
          firstName
          lastName
        }
        createdAt
        title
        description
        isLiked
        likesCount
        mediaUrl
      }
    }
  }
`;

export const GET_FAVORITE_POSTS = gql`
  query getFavoritePosts($input: FindFavouritePostsRequest!) {
    favouritePosts(input: $input) {
      data {
        id
        author {
          avatarUrl
          firstName
          lastName
        }
        createdAt
        title
        description
        isLiked
        likesCount
        mediaUrl
      }
    }
  }
`;

export const GET_POST = gql`
  query getPost($input: PostIdRequest!) {
    post(input: $input) {
      id
      author {
        avatarUrl
        firstName
        lastName
      }
      createdAt
      title
      description
      isLiked
      likesCount
      mediaUrl
    }
  }
`;

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

export const EDIT_PROFILE = gql`
  mutation editProfile($input: EditProfileRequest!) {
    userEditProfile(input: $input) {
      user {
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
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($input: CreatePostRequest!) {
    postCreate(input: $input) {
      id
      author {
        avatarUrl
        firstName
        lastName
      }
      createdAt
      title
      description
      isLiked
      likesCount
      mediaUrl
    }
  }
`;

export const LIKING = gql`
  mutation likePost($input: PostIdRequest!) {
    postLike(input: $input) {
      id
      author {
        avatarUrl
        firstName
        lastName
      }
      createdAt
      title
      description
      isLiked
      likesCount
      mediaUrl
    }
  }
`;

export const UN_LIKING = gql`
  mutation unlikePost($input: PostIdRequest!) {
    postUnlike(input: $input) {
      id
      author {
        avatarUrl
        firstName
        lastName
      }
      createdAt
      title
      description
      isLiked
      likesCount
      mediaUrl
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($input: PostIdRequest!) {
    postDelete(input: $input) {
      id
      ok
    }
  }
`;
