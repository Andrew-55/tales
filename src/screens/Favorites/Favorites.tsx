import React, {useContext, useState} from 'react';
import {View, StyleSheet, Modal, Pressable, FlatList} from 'react-native';
import {useQuery} from '@apollo/client';
import Toast from 'react-native-toast-message';

import {AppText, Avatar} from '@app/ui';
import {AvatarMenu, CardPost, Loading, NoPosts, Theme} from '@app/components';
import {
  FavoritePostsType,
  GET_FAVORITE_POSTS,
  UserType,
  USER_ME,
} from '@app/entities';
import {THEMES} from './themes';
import {ERROR_MESSAGE, LIMIT_REQUEST} from '@app/constants';
import {NAVIGATION_SCREEN} from '@app/screens';

export const Favorites = ({navigation}: any) => {
  const [isAvatarMenuVisible, setIsAvatarMenuVisible] = useState(false);
  const {error, data: userData} = useQuery<UserType>(USER_ME);
  const {
    loading,
    error: errorFavoritePosts,
    data: favoritePostsData,
  } = useQuery<FavoritePostsType>(GET_FAVORITE_POSTS, {
    variables: {input: {limit: LIMIT_REQUEST.favoritePosts}},
  });
  const {themeVariant} = useContext(Theme);
  const stylesThemes = THEMES[themeVariant];

  const favoritePosts = favoritePostsData?.favouritePosts.data || undefined;
  const hasFavoritePosts = favoritePosts && favoritePosts.length > 0;

  const avatarUrl = userData?.userMe.avatarUrl || '';

  if (error) {
    navigation.navigate(NAVIGATION_SCREEN.WELCOME);
    Toast.show({type: 'info', text1: ERROR_MESSAGE.needLogin});
  }

  if (errorFavoritePosts) {
    Toast.show({type: 'info', text1: ERROR_MESSAGE.gettingPosts});
  }

  const handleOpenPost = (id: string) => {
    navigation.navigate(NAVIGATION_SCREEN.POST, {id: id});
  };

  return (
    <View style={[styles.container, stylesThemes.favorites]}>
      <View style={styles.header}>
        <AppText
          variant="Title_2_Medium_32"
          style={stylesThemes.favoritesHeaderText}>
          Favorites
        </AppText>
        <Pressable onPress={() => setIsAvatarMenuVisible(true)}>
          <Avatar size={40} themeVariant={themeVariant} avatarUrl={avatarUrl} />
        </Pressable>
      </View>

      {hasFavoritePosts ? (
        <FlatList
          data={favoritePosts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CardPost
              post={item}
              themeVariant={themeVariant}
              onOpenPost={handleOpenPost}
            />
          )}
        />
      ) : (
        <View style={styles.wrap}>
          {!loading && (
            <NoPosts
              message="You haven't added anything to your favorites yet"
              themeVariant={themeVariant}
            />
          )}
        </View>
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

      {loading && <Loading message="Loading ..." />}
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
    paddingHorizontal: 16,
  },
  wrap: {
    position: 'relative',
    top: '25%',
    width: 220,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
