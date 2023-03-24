import {useMutation} from '@apollo/client';
import {LIMIT_REQUEST} from '@app/constants';
import {GET_FAVORITE_POSTS, PostUnlikeType, UN_LIKING} from '@app/graphql';

export const useUnlike = () => {
  const [unlikePost, {error}] = useMutation<PostUnlikeType>(UN_LIKING, {
    update(cache, {data: dataUnlike}) {
      if (dataUnlike) {
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
                data: data.favouritePosts.data.filter(
                  (post: any) => post.id !== dataUnlike.postUnlike.id,
                ),
              },
            },
          });
        }
      }
    },
  });
  return {unlikePost, error};
};
