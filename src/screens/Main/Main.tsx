import React, {useContext, useState} from 'react';
import {View, StyleSheet, Pressable, FlatList, Modal} from 'react-native';
import {useQuery} from '@apollo/client';
import Toast from 'react-native-toast-message';

import {AvatarMenu, CardPost, Theme} from '@app/components';
import {AppTab, AppText, Avatar} from '@app/ui';
import {THEMES} from './themes';
import {PostsType, GET_POSTS, UserType, USER_ME} from '@app/entities';
import {Loading} from '@app/components/Loading';
import {ERROR_MESSAGE, LIMIT_REQUEST} from '@app/constants';
import {NAVIGATION_SCREEN} from '@app/screens';

export enum TYPE_REQUEST {
  NEW = 'NEW',
  TOP = 'TOP',
}

export const Main = ({navigation}: any) => {
  const [typeRequest, setTypeRequest] =
    useState<keyof typeof TYPE_REQUEST>('NEW');
  const {loading, error, data: userData} = useQuery<UserType>(USER_ME);
  const {
    loading: loadingPost,
    error: errorPosts,
    data: postsData,
  } = useQuery<PostsType>(GET_POSTS, {
    variables: {input: {limit: LIMIT_REQUEST.posts, type: typeRequest}},
  });

  const [isAvatarMenuVisible, setIsAvatarMenuVisible] = useState(false);
  const {themeVariant} = useContext(Theme);

  const posts = postsData?.posts.data || undefined;

  if (error) {
    navigation.navigate(NAVIGATION_SCREEN.WELCOME);
    Toast.show({type: 'info', text1: ERROR_MESSAGE.needLogin});
  }

  if (errorPosts) {
    Toast.show({type: 'info', text1: ERROR_MESSAGE.gettingPosts});
  }

  const firstName = userData?.userMe.firstName || '';
  const avatarUrl = userData?.userMe.avatarUrl || '';

  const stylesThemes = THEMES[themeVariant];

  const handlePressNew = () => {
    setTypeRequest(TYPE_REQUEST.NEW);
  };
  const handlePressTop = () => {
    setTypeRequest(TYPE_REQUEST.TOP);
  };

  const handleOpenPost = (id: string) => {
    navigation.navigate('Post', {id: id});
  };

  return (
    <View style={[styles.container, stylesThemes.main]}>
      <View style={styles.header}>
        <AppText variant="Title_2_Medium_32" style={stylesThemes.mainText}>
          {`Hello ${firstName}!`}
        </AppText>
        <Pressable onPress={() => setIsAvatarMenuVisible(true)}>
          <Avatar size={40} themeVariant={themeVariant} avatarUrl={avatarUrl} />
        </Pressable>
      </View>

      <View style={styles.wrapTab}>
        <AppTab
          themeVariant={themeVariant}
          onPressNew={handlePressNew}
          onPressTop={handlePressTop}
        />
      </View>

      {posts && (
        <FlatList
          data={posts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CardPost
              post={item}
              themeVariant={themeVariant}
              onOpenPost={handleOpenPost}
            />
          )}
        />
      )}

      <Modal
        visible={isAvatarMenuVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent>
        <AvatarMenu
          onClose={() => setIsAvatarMenuVisible(false)}
          navigation={navigation}
        />
      </Modal>

      {(loading || loadingPost) && <Loading message="Loading ..." />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
  wrapTab: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
