import React, {useContext, useState} from 'react';
import {View, StyleSheet, Modal, Pressable, FlatList} from 'react-native';

import {AppButtonIconCircle, AppText, Avatar} from '@app/ui';
import {AvatarMenu, NoPosts, Theme} from '@app/components';
import {THEMES} from './themes';
import {CardPost, PostType} from '@app/components/CardPost';
import {SvgPlus} from '@app/assets/svg';
import {MOCK_POSTS} from '../Main/mockDate';
import {MyPostCard} from '@app/components';

export const MyPosts = ({navigation}: any) => {
  const [isAvatarMenuVisible, setIsAvatarMenuVisible] = useState(false);
  const {themeVariant} = useContext(Theme);
  const stylesThemes = THEMES[themeVariant];
  const favoritePosts: PostType[] = [...MOCK_POSTS];
  const hasFavoritePosts = favoritePosts.length > 0;

  const firstName = 'John';
  const lastName = 'Moor';
  const avatarUrl =
    'https://virtus-img.cdnvideo.ru/images/material-card/plain/a8/a80fda76-c804-4fc9-9bb5-34d7e18b69be.webp';

  const handleAddPost = () => {
    navigation.navigate('CreatePost');
  };

  const handleOpenPost = (id: string) => {
    navigation.navigate('Post', {id: id});
  };

  const handleDeletePost = (id: string) => {
    console.log(id);
  };

  return (
    <View style={[styles.container, stylesThemes.myPosts]}>
      <View style={styles.header}>
        <AppText
          variant="Title_2_Medium_32"
          style={stylesThemes.myPostsHeaderText}>
          My posts
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
            <MyPostCard id={item.id} onDeletePost={handleDeletePost}>
              <CardPost
                post={item}
                themeVariant={themeVariant}
                onOpenPost={handleOpenPost}
              />
            </MyPostCard>
          )}
        />
      ) : (
        <View style={styles.wrap}>
          <NoPosts
            message="You haven't posted any posts yet"
            themeVariant={themeVariant}
          />
        </View>
      )}

      <View style={styles.wrapAppButton}>
        <AppButtonIconCircle
          Icon={SvgPlus}
          themeVariant={themeVariant}
          height={24}
          width={24}
          padding={16}
          onPress={handleAddPost}
        />
      </View>

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
    position: 'relative',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapAppButton: {
    position: 'absolute',
    right: 16,
    bottom: 32,
  },
});
