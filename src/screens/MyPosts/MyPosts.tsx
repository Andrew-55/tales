import React, {useContext, useState} from 'react';
import {View, StyleSheet, Modal, Pressable, FlatList} from 'react-native';
import {useMutation, useQuery} from '@apollo/client';
import Toast from 'react-native-toast-message';

import {AppButtonIconCircle, AppText, Avatar} from '@app/ui';
import {AvatarMenu, Loading, NoPosts, Theme} from '@app/components';
import {
  MyPostsType,
  GET_MY_POSTS,
  UserType,
  USER_ME,
  DELETE_POST,
  GET_FAVORITE_POSTS,
  GET_POSTS,
} from '@app/graphql';
import {THEMES} from './themes';
import {CardPost} from '@app/components';
import {SvgPlus} from '@app/assets/svg';
import {MyPostCard} from '@app/components';
import {ERROR_MESSAGE} from '@app/constants';

export const MyPosts = ({navigation}: any) => {
  const [isAvatarMenuVisible, setIsAvatarMenuVisible] = useState(false);
  const {error, data: userData} = useQuery<UserType>(USER_ME);
  const {
    loading,
    error: errorMyPosts,
    data: myPostsData,
  } = useQuery<MyPostsType>(GET_MY_POSTS, {
    variables: {input: {limit: 7}},
  });
  const [deletePost, {loading: loadingDelete, error: errorDelete}] =
    useMutation(DELETE_POST, {
      refetchQueries: [
        {query: GET_POSTS},
        {query: GET_FAVORITE_POSTS},
        {query: GET_MY_POSTS},
      ],
    });

  if (error) {
    navigation.navigate('Welcome');
    Toast.show({type: 'info', text1: ERROR_MESSAGE.needLogin});
  }

  if (errorMyPosts) {
    Toast.show({type: 'error', text1: ERROR_MESSAGE.gettingPosts});
  }

  if (errorDelete) {
    Toast.show({type: 'error', text1: ERROR_MESSAGE.gettingPosts});
  }

  const myPost = myPostsData?.myPosts.data;

  const {themeVariant} = useContext(Theme);
  const stylesThemes = THEMES[themeVariant];

  const firstName = userData?.userMe.firstName
    ? userData?.userMe.firstName
    : '';
  const lastName = userData?.userMe.lastName ? userData?.userMe.lastName : '';
  const avatarUrl = userData?.userMe.avatarUrl ? userData.userMe.avatarUrl : '';

  const handleAddPost = () => {
    navigation.navigate('CreatePost');
  };

  const handleOpenPost = (id: string) => {
    navigation.navigate('Post', {id: id});
  };

  const handleDeletePost = (id: string) => {
    console.log(id);
    deletePost({variables: {input: {id: id}}});
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

      {myPost ? (
        <FlatList
          data={myPost}
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
          {!loading && (
            <NoPosts
              message="You haven't posted any posts yet"
              themeVariant={themeVariant}
            />
          )}
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
          navigation={navigation}
        />
      </Modal>

      {(loading || loadingDelete) && <Loading message="Loading ..." />}
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
