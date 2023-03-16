import React, {useContext} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

import {AppButtonIcon, AppText} from '@app/ui';
import {THEMES} from './themes';
import {AboutPost} from '@app/components/AboutPost';
import {Theme} from '@app/components';
import {MOCK_POSTS} from '../Main/mockDate';
import {SvgArrowLeft} from '@app/assets/svg';

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

export const Post = ({navigation, route}: any) => {
  const id = route.params.id;
  const {themeVariant} = useContext(Theme);
  const stylesThemes = THEMES[themeVariant];
  const post = [...MOCK_POSTS].find(item => item.id === id);
  const textPost =
    'The Queen of the Carnival in Rio de Janeiro and up to two princesses having the duty to woo the revelry, along with the King Momo. Unlike  some cities, in the city of Rio de Janeiro, Queens of Carnival do not see a certain school of samba. In competitions, princesses are usually placed as second and third, and are correspondingly 1st and 2nd princess. Some of them after the reign become queens or battery bridesmaids. Incorporated into every aspect of the Rio carnival are dancing and music. The most famous dance is carnival samba, a  Brazilian dance with African influences. The samba remains a popular dance not only in carnival but in the ghettos outside of the main cities.Some of them after the reign become queens or battery bridesmaids. Incorporated into every aspect of the Rio';

  const aboutPost = post
    ? {
        isLiked: false,
        likesCount: post.likesCount,
        authorInfo: post.authorInfo,
      }
    : undefined;

  return (
    <View style={[styles.post, stylesThemes.post]}>
      <View style={styles.header}>
        <AppButtonIcon
          Icon={SvgArrowLeft}
          themeVariant={themeVariant}
          onPress={navigation.goBack}
        />
        <AppText
          variant="Headline_1_Semibold_18"
          style={[styles.title, stylesThemes.postTitle]}>
          {post && post.title}
        </AppText>
      </View>

      {post && (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.content}>
            <AppText
              variant="Body_2_Medium_16"
              style={[styles.date, stylesThemes.postDate]}>
              {post.createdAt}
            </AppText>
            <Image
              source={{uri: post.mediaUrl, width: 500, height: 400}}
              resizeMethod="auto"
              style={styles.image}
            />
            <AppText
              variant="Body_6_Regular_14"
              style={[styles.text, stylesThemes.postText]}>
              {textPost}
            </AppText>
            {aboutPost && (
              <AboutPost aboutPost={aboutPost} themeVariant={themeVariant} />
            )}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    columnGap: 16,
    alignItems: 'center',
    marginBottom: 20,
    paddingLeft: 16,
    paddingRight: 56,
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 20,
  },
  date: {
    textAlign: 'center',
    marginBottom: 12,
  },
  text: {
    textAlign: 'justify',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 225,
    borderRadius: 17,
    marginBottom: 20,
  },
});
