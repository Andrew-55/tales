import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppButtonIcon, AppText, Avatar} from '@app/ui';
import {THEMES} from './themes';
import {SvgHeart, SvgShare} from '@app/assets/svg';
import {ThemeVariantType} from '@app/components';
import {useMutation} from '@apollo/client';
import {
  GET_FAVORITE_POSTS,
  GET_MY_POSTS,
  GET_POSTS,
  LIKING,
  UN_LIKING,
} from '@app/graphql';

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
  const [likePost, {error}] = useMutation(LIKING, {
    refetchQueries: [
      {query: GET_POSTS},
      {query: GET_MY_POSTS},
      {query: GET_FAVORITE_POSTS},
    ],
  });
  const [unlikePost, {error: errorUnlike}] = useMutation(UN_LIKING, {
    refetchQueries: [
      {query: GET_POSTS},
      {query: GET_MY_POSTS},
      {query: GET_FAVORITE_POSTS},
    ],
  });

  if (error) {
    console.log(JSON.stringify(error));
  }
  if (errorUnlike) {
    console.log(JSON.stringify(errorUnlike));
  }

  const handlePressLike = () => {
    if (aboutPost.isLiked) {
      unlikePost({variables: {input: {id: aboutPost.id}}});
    } else {
      likePost({variables: {input: {id: aboutPost.id}}});
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
        <AppButtonIcon Icon={SvgShare} themeVariant={themeVariant} />
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
