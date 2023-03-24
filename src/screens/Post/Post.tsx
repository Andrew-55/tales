import React, {useContext} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {useQuery} from '@apollo/client';
import dayjs from 'dayjs';
import {AppButtonIcon, AppText} from '@app/ui';
import {THEMES} from './themes';
import {AboutPost, Theme} from '@app/components';
import {SvgArrowLeft} from '@app/assets/svg';
import {DataPostType, GET_POST} from '@app/graphql';
import {ERROR_MESSAGE} from '@app/constants';

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
  const {error, data: postData} = useQuery<DataPostType>(GET_POST, {
    variables: {input: {id: id}},
  });
  const {themeVariant} = useContext(Theme);
  const stylesThemes = THEMES[themeVariant];

  const post = postData?.post;
  const aboutPost = post
    ? {
        id: post.id,
        isLiked: post.isLiked,
        likesCount: post.likesCount,
        authorInfo: post.author,
      }
    : undefined;

  if (error) {
    Toast.show({type: 'info', text1: ERROR_MESSAGE.somethingWrong});
  }

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
              {dayjs(post.createdAt).format('DD.MM.YYYY')}
            </AppText>
            <Image
              source={{uri: post.mediaUrl, width: 500, height: 400}}
              resizeMethod="auto"
              style={styles.image}
            />
            <AppText
              variant="Body_6_Regular_14"
              style={[styles.text, stylesThemes.postText]}>
              {post.description}
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
