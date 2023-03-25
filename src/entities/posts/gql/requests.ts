import {gql} from '@apollo/client';

export const POST_FRAGMENT = gql`
  fragment PostFragment on PostModel {
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
`;

export const GET_POSTS = gql`
  ${POST_FRAGMENT}
  query getPosts($input: FindPostsRequest!) {
    posts(input: $input) {
      data {
        ...PostFragment
      }
    }
  }
`;

export const GET_MY_POSTS = gql`
  ${POST_FRAGMENT}
  query getMyPosts($input: FindMyPostsRequest!) {
    myPosts(input: $input) {
      data {
        ...PostFragment
      }
    }
  }
`;

export const GET_FAVORITE_POSTS = gql`
  ${POST_FRAGMENT}
  query getFavoritePosts($input: FindFavouritePostsRequest!) {
    favouritePosts(input: $input) {
      data {
        ...PostFragment
      }
    }
  }
`;

export const GET_POST = gql`
  ${POST_FRAGMENT}
  query getPost($input: PostIdRequest!) {
    post(input: $input) {
      ...PostFragment
    }
  }
`;

export const CREATE_POST = gql`
  ${POST_FRAGMENT}
  mutation createPost($input: CreatePostRequest!) {
    postCreate(input: $input) {
      ...PostFragment
    }
  }
`;

export const LIKING = gql`
  ${POST_FRAGMENT}
  mutation likePost($input: PostIdRequest!) {
    postLike(input: $input) {
      ...PostFragment
    }
  }
`;

export const UN_LIKING = gql`
  ${POST_FRAGMENT}
  mutation unlikePost($input: PostIdRequest!) {
    postUnlike(input: $input) {
      ...PostFragment
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
