import React, {useContext, useState} from 'react';
import {View, StyleSheet, Modal, Pressable, FlatList} from 'react-native';

import {AppText, Avatar} from '@app/ui';
import {AvatarMenu, CardPost, NoPosts, Theme} from '@app/components';
import {THEMES} from './themes';
import {PostType} from '@app/components/CardPost';

export const Favorites = ({navigation}: any) => {
  const [isAvatarMenuVisible, setIsAvatarMenuVisible] = useState(false);
  const {themeVariant} = useContext(Theme);
  const stylesThemes = THEMES[themeVariant];
  const favoritePosts: PostType[] = [];
  const hasFavoritePosts = favoritePosts.length > 0;

  const firstName = 'John';
  const lastName = 'Moor';
  const avatarUrl =
    'https://virtus-img.cdnvideo.ru/images/material-card/plain/a8/a80fda76-c804-4fc9-9bb5-34d7e18b69be.webp';

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
