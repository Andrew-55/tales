import React, {useContext, useState} from 'react';
import {View, StyleSheet, Pressable, FlatList, Modal} from 'react-native';
import {AvatarMenu, CardPost, Theme} from '@app/components';
import {AppTab, AppText, Avatar} from '@app/ui';
import {THEMES} from './themes';
import {MOCK_POSTS} from './mockDate';

export const Main = () => {
  const [isAvatarMenuVisible, setIsAvatarMenuVisible] = useState(false);
  const {themeVariant} = useContext(Theme);
  const firstName = 'John';
  const lastName = 'Moor';
  const avatarUrl =
    'https://virtus-img.cdnvideo.ru/images/material-card/plain/a8/a80fda76-c804-4fc9-9bb5-34d7e18b69be.webp';
  const posts = [...MOCK_POSTS];

  const stylesThemes = THEMES[themeVariant];

  const handlePressNew = () => {};
  const handlePressTop = () => {};

  return (
    <View style={[styles.container, stylesThemes.main]}>
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
          <CardPost post={item} themeVariant={themeVariant} />
        )}
      />
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
