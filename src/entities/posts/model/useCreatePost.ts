import {useMutation} from '@apollo/client';
import {LIMIT_REQUEST} from '@app/constants';
import {
  CreatePostType,
  CREATE_POST,
  GET_MY_POSTS,
  GET_POSTS,
} from '@app/entities';
import {TYPE_REQUEST} from '@app/screens';

export const useCreatePost = () => {
  const [createPost, {loading, error}] = useMutation<CreatePostType>(
    CREATE_POST,
    {
      update(cache, {data: postCreated}) {
        if (postCreated) {
          const data = cache.readQuery<any>({
            query: GET_MY_POSTS,
            variables: {input: {limit: LIMIT_REQUEST.myPosts}},
          });
          cache.writeQuery({
            query: GET_MY_POSTS,
            variables: {input: {limit: LIMIT_REQUEST.myPosts}},
            data: {
              myPosts: {
                __typename: 'FindMyPostsPaginationResponse',
                data: data.myPosts.data
                  ? [postCreated.postCreate, ...data.myPosts.data]
                  : [postCreated.postCreate],
              },
            },
          });

          const dataPosts = cache.readQuery<any>({
            query: GET_POSTS,
            variables: {
              input: {limit: LIMIT_REQUEST.posts, type: TYPE_REQUEST.NEW},
            },
          });
          cache.writeQuery({
            query: GET_POSTS,
            variables: {
              input: {limit: LIMIT_REQUEST.posts, type: TYPE_REQUEST.NEW},
            },
            data: {
              posts: {
                __typename: 'FindPostsPaginationResponse',
                data: dataPosts.posts.data
                  ? [postCreated.postCreate, ...dataPosts.posts.data]
                  : [postCreated.postCreate],
              },
            },
          });
        }
      },
    },
  );
  return {createPost, loading, error};
};
