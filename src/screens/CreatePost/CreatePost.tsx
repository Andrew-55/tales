import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {Theme} from '@app/components';
import {THEMES} from './themes';

export const CreatePost = () => {
  const {themeVariant} = useContext(Theme);
  const stylesThemes = THEMES[themeVariant];

  return <View style={[styles.container, stylesThemes.createPost]} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
