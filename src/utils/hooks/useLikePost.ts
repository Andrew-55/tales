import {useMutation} from '@apollo/client';
import {LIMIT_REQUEST} from '@app/constants';
import {GET_FAVORITE_POSTS, LIKING, PostLikeType} from '@app/graphql';

export const useLikePost = () => {
  const [likePost, {error}] = useMutation<PostLikeType>(LIKING, {
    update(cache, {data: dataLike}) {
      if (dataLike) {
        const data = cache.readQuery<any>({
          query: GET_FAVORITE_POSTS,
          variables: {input: {limit: LIMIT_REQUEST.favoritePosts}},
        });
        if (data) {
          cache.writeQuery({
            query: GET_FAVORITE_POSTS,
            variables: {input: {limit: LIMIT_REQUEST.favoritePosts}},
            data: {
              favouritePosts: {
                __typename: 'FindFavouritePostsPaginationResponse',
                data: data.favouritePosts.data
                  ? [dataLike.postLike, ...data.favouritePosts.data]
                  : [dataLike.postLike],
              },
            },
          });
        }
      }
    },
  });
  return {likePost, error};
};
