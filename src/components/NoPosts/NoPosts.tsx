import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

import {AppText} from '@app/ui';
import {THEMES} from './themes';

type Props = {
  message: string;
  themeVariant: keyof typeof THEMES;
};

export const NoPosts: FC<Props> = ({message, themeVariant}) => {
  const stylesThemes = THEMES[themeVariant];

  return (
    <>
      <View style={[styles.ups, stylesThemes.noPostsUps]}>
        <AppText
          variant="Title_1_Regular_55"
          style={stylesThemes.noPostsUpsText}>
          UPS
        </AppText>
      </View>

      <AppText
        variant="Body_5_Regular_16"
        style={[styles.description, stylesThemes.noPostsText]}>
        {message}
      </AppText>
    </>
  );
};

const styles = StyleSheet.create({
  ups: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 24,
    transform: [{rotate: '-3.22deg'}],
  },
  wrapDescription: {
    width: 210,
  },
  description: {
    width: 210,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});
