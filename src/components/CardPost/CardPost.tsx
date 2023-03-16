import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {AppText} from '@app/ui';
import {THEMES} from './themes';
import {AboutPost} from '../AboutPost';

export type AuthorInfoType = {
  avatarUrl: string;
  firstName: string;
  lastName: string;
};

export type PostType = {
  id: string;
  title: string;
  createdAt: string;
  mediaUrl: string;
  isLiked?: boolean;
  likesCount: number;
  authorInfo: AuthorInfoType;
};

type Props = {
  post: PostType;
  onOpenPost: (id: string) => void;
  themeVariant: keyof typeof THEMES;
};

export const CardPost: FC<Props> = ({post, themeVariant, onOpenPost}) => {
  const stylesThemes = THEMES[themeVariant];

  const aboutPost = {
    isLiked: post.isLiked,
    likesCount: post.likesCount,
    authorInfo: post.authorInfo,
  };

  return (
    <View style={[styles.post, stylesThemes.post]}>
      <View style={styles.wrapTitle}>
        <AppText
          variant="Body_2_Medium_16"
          style={[styles.title, stylesThemes.postTitle]}>
          {post.title}
        </AppText>
        <AppText variant="Body_2_Medium_16" style={stylesThemes.postText}>
          {post.createdAt}
        </AppText>
      </View>
      <Pressable onLongPress={() => onOpenPost(post.id)}>
        <Image
          source={{uri: post.mediaUrl, width: 500, height: 400}}
          resizeMethod="auto"
          style={styles.image}
        />
      </Pressable>
      <AboutPost aboutPost={aboutPost} themeVariant={themeVariant} />
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    paddingTop: 24,
    paddingBottom: 32,
    paddingRight: 20,
    paddingLeft: 20,
  },
  wrapTitle: {
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  title: {
    maxWidth: '60%',
  },
  image: {
    width: '100%',
    height: 225,
    borderRadius: 17,
    marginBottom: 20,
  },
});
