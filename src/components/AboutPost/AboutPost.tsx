import React, {FC} from 'react';
import {StyleSheet, Share, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {AppButtonIcon, AppText, Avatar} from '@app/ui';
import {THEMES} from './themes';
import {SvgHeart, SvgShare} from '@app/assets/svg';
import {ThemeVariantType} from '@app/components';
import {useMutation} from '@apollo/client';
import {
  GET_FAVORITE_POSTS,
  LIKING,
  PostLikeType,
  PostUnlikeType,
  UN_LIKING,
} from '@app/graphql';
import {ERROR_MESSAGE, LIMIT_REQUEST} from '@app/constants';

type PostType = {
  id: string;
  isLiked?: boolean;
  likesCount: number;
  authorInfo: {avatarUrl: string; firstName: string; lastName: string};
};

type Props = {
  aboutPost: PostType;
  themeVariant: ThemeVariantType;
};

export const AboutPost: FC<Props> = ({aboutPost, themeVariant}) => {
  const stylesThemes = THEMES[themeVariant];
  const [likePost, {error}] = useMutation<PostLikeType>(LIKING, {
    update(cache, {data: dataLike}) {
      if (dataLike) {
        const data = cache.readQuery({
          query: GET_FAVORITE_POSTS,
          variables: {input: {limit: LIMIT_REQUEST.favoritePosts}},
        });
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
    },
  });

  const [unlikePost, {error: errorUnlike}] = useMutation<PostUnlikeType>(
    UN_LIKING,
    {
      update(cache, {data: dataUnlike}) {
        if (dataUnlike) {
          const data = cache.readQuery({
            query: GET_FAVORITE_POSTS,
            variables: {input: {limit: 10}},
          });
          cache.writeQuery({
            query: GET_FAVORITE_POSTS,
            variables: {input: {limit: 10}},
            data: {
              favouritePosts: {
                __typename: 'FindFavouritePostsPaginationResponse',
                data: data.favouritePosts.data.filter(
                  post => post.id !== dataUnlike.postUnlike.id,
                ),
              },
            },
          });
        }
      },
    },
  );

  if (error || errorUnlike) {
    Toast.show({type: 'info', text1: ERROR_MESSAGE.needLogin});
  }

  const handleShare = async () => {
    try {
      await Share.share({
        message: `tales://post/${aboutPost.id}`,
      });
    } catch (err) {
      Toast.show({type: 'error', text1: ERROR_MESSAGE.somethingWrong});
    }
  };

  const handlePressLike = async () => {
    if (aboutPost.isLiked) {
      await unlikePost({variables: {input: {id: aboutPost.id}}});
    } else {
      await likePost({variables: {input: {id: aboutPost.id}}});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.authorInfo}>
        <Avatar
          size={24}
          themeVariant={themeVariant}
          avatarUrl={aboutPost.authorInfo.avatarUrl}
        />
        <AppText variant="Body_6_Regular_14" style={stylesThemes.aboutPostText}>
          {`${aboutPost.authorInfo.firstName} ${aboutPost.authorInfo.lastName[0]}.`}
        </AppText>
      </View>

      <View style={styles.wrapButtons}>
        <View style={styles.likes}>
          <AppButtonIcon
            Icon={SvgHeart}
            themeVariant={themeVariant}
            isActive={aboutPost.isLiked}
            onPress={handlePressLike}
          />
          <AppText
            variant="Body_6_Regular_14"
            style={stylesThemes.aboutPostLikeColor}>
            {aboutPost.likesCount}
          </AppText>
        </View>
        <AppButtonIcon
          Icon={SvgShare}
          themeVariant={themeVariant}
          onPress={handleShare}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  wrapButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  likes: {
    flexDirection: 'row',
    columnGap: 8,
  },
});
