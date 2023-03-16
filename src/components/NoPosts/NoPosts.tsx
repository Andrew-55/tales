import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

import {AppText} from '@app/ui';
import {THEMES} from './themes';
import {ThemeVariantType} from '@app/components';

type Props = {
  message: string;
  themeVariant: ThemeVariantType;
};

export const NoPosts: FC<Props> = ({message, themeVariant}) => {
  const stylesThemes = THEMES[themeVariant];

  return (
    <>
      <View style={[styles.title, stylesThemes.noPostsUps]}>
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
  title: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 24,
    transform: [{rotate: '-3.22deg'}],
  },
  description: {
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});
