import React, {useContext, useState} from 'react';
import {View, StyleSheet, Modal, Pressable, FlatList} from 'react-native';
import {useQuery} from '@apollo/client';

import {AppText, Avatar} from '@app/ui';
import {AvatarMenu, CardPost, NoPosts, Theme} from '@app/components';
import {
  FavoritePostsType,
  GET_FAVORITE_POSTS,
  UserType,
  USER_ME,
} from '@app/graphql';
import {THEMES} from './themes';

export const Favorites = ({navigation}: any) => {
  const [isAvatarMenuVisible, setIsAvatarMenuVisible] = useState(false);
  const {error, data: userData} = useQuery<UserType>(USER_ME);
  const {error: errorFavoritePosts, data: favoritePostsData} =
    useQuery<FavoritePostsType>(GET_FAVORITE_POSTS, {
      variables: {input: {limit: 7}},
    });
  const {themeVariant} = useContext(Theme);
  const stylesThemes = THEMES[themeVariant];
  const favoritePosts = favoritePostsData?.favouritePosts.data;
  const hasFavoritePosts = favoritePosts && favoritePosts.length > 0;

  const firstName = userData?.userMe.firstName
    ? userData?.userMe.firstName
    : '';
  const lastName = userData?.userMe.lastName ? userData?.userMe.lastName : '';
  const avatarUrl = userData?.userMe.avatarUrl ? userData.userMe.avatarUrl : '';

  if (error) {
    console.log('ErrorFavorite' + JSON.stringify(error));
  }

  if (errorFavoritePosts) {
    console.log('Error FavoritePost' + JSON.stringify(errorFavoritePosts));
  }

  const handleOpenPost = (id: string) => {
    navigation.navigate('Post', {id: id});
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
          <NoPosts
            message="You haven't added anything to your favorites yet"
            themeVariant={themeVariant}
          />
        </View>
      )}

      <Modal
        visible={isAvatarMenuVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent>
        <AvatarMenu
          author={{avatarUrl, firstName, lastName}}
          onClose={() => setIsAvatarMenuVisible(false)}
          navigation={navigation}
        />
      </Modal>
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
