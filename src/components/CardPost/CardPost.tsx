import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import dayjs from 'dayjs';

import {AppText} from '@app/ui';
import {THEMES} from './themes';
import {AboutPost} from '../AboutPost';
import {ThemeVariantType} from '@app/components';
import {PostType} from '@app/entities';

type Props = {
  post: PostType;
  onOpenPost: (id: string) => void;
  themeVariant: ThemeVariantType;
};

export const CardPost: FC<Props> = ({post, themeVariant, onOpenPost}) => {
  const stylesThemes = THEMES[themeVariant];

  const aboutPost = {
    id: post.id,
    isLiked: post.isLiked,
    likesCount: post.likesCount,
    authorInfo: post.author,
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
          {dayjs(post.createdAt).format('DD.MM.YYYY')}
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
