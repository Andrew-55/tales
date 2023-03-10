import React, {FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';

import {THEMES} from './themes';
import {AppText} from '../AppText';
import {SvgCloudArrowUp} from '@app/assets/svg';

type Props = {
  themeVariant: keyof typeof THEMES;
  onPress?: () => void;
};

export const Upload: FC<Props> = ({themeVariant, onPress}) => {
  const stylesThemes = THEMES[themeVariant];

  return (
    <Pressable
      onPress={onPress}
      style={[styles.pressable, stylesThemes.upload]}>
      <>
        <SvgCloudArrowUp />
        <AppText variant="Body_3_Medium_14" style={stylesThemes.uploadText}>
          Upload your photo here
        </AppText>
      </>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    paddingTop: 44,
    paddingBottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    rowGap: 8,
    borderStyle: 'dashed',
    borderWidth: 1.5,
  },
});
