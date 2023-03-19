import React, {useContext, useState} from 'react';
import {View, StyleSheet, Pressable, FlatList, Modal} from 'react-native';
import {AvatarMenu, CardPost, Theme} from '@app/components';
import {AppTab, AppText, Avatar} from '@app/ui';
import {THEMES} from './themes';
import {MOCK_POSTS} from './mockDate';
import {useQuery} from '@apollo/client';
import {USER_ME} from '@app/services/requests';

export const Main = ({navigation}: any) => {
  const {error, data} = useQuery(USER_ME);
  const [isAvatarMenuVisible, setIsAvatarMenuVisible] = useState(false);
  const {themeVariant} = useContext(Theme);

  const firstName = data?.firstName ? data.firstName : '';
  const lastName = data?.lastName ? data.firstName : '';
  const avatarUrl = data?.avatarUrl ? data.avatarUrl : '';

  const posts = [...MOCK_POSTS];

  const stylesThemes = THEMES[themeVariant];

  const handlePressNew = () => {};
  const handlePressTop = () => {};

  const handleOpenPost = (id: string) => {
    navigation.navigate('Post', {id: id});
  };

  if (data) {
    console.log(data.userMe);
  }

  if (error) {
    console.log(JSON.stringify(error, null, 2));
  }

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
