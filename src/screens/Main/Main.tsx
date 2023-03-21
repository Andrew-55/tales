import React, {useContext, useState} from 'react';
import {View, StyleSheet, Pressable, FlatList, Modal} from 'react-native';
import {AvatarMenu, CardPost, Theme} from '@app/components';
import {AppTab, AppText, Avatar} from '@app/ui';
import {THEMES} from './themes';
import {useQuery} from '@apollo/client';
import {PostsType, GET_POSTS, UserType, USER_ME} from '@app/graphql';

enum TYPE_REQUEST {
  NEW = 'NEW',
  TOP = 'TOP',
}

export const Main = ({navigation}: any) => {
  const [typeRequest, setTypeRequest] =
    useState<keyof typeof TYPE_REQUEST>('NEW');
  const {error, data: userData} = useQuery<UserType>(USER_ME);
  const {error: errorPosts, data: postsData} = useQuery<PostsType>(GET_POSTS, {
    variables: {input: {limit: 4, type: typeRequest}},
  });

  const [isAvatarMenuVisible, setIsAvatarMenuVisible] = useState(false);
  const {themeVariant} = useContext(Theme);

  const posts = postsData ? postsData.posts.data : undefined;

  if (error) {
    console.log('ErrorMain' + JSON.stringify(error));
  }

  if (errorPosts) {
    console.log('ErrorMain' + JSON.stringify(errorPosts));
  }

  const firstName = userData?.userMe.firstName
    ? userData?.userMe.firstName
    : '';
  const lastName = userData?.userMe.lastName ? userData?.userMe.lastName : '';
  const avatarUrl = userData?.userMe.avatarUrl ? userData.userMe.avatarUrl : '';

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
