import React, {FC} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {TYPOGRAPHY} from '@app/assets/styles/constants';
import {THEMES} from './themes';
import {ThemeVariantType} from '@app/components';

type Props = {
  text: string;
  isDisabled?: boolean;
  themeVariant: ThemeVariantType;
  onPress?: () => void;
};

export const AppButtonText: FC<Props> = ({
  text,
  isDisabled,
  themeVariant,
  onPress,
}) => {
  const stylesThemes = THEMES[themeVariant];

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({pressed}) => [
        styles.pressable,
        stylesThemes.appButtonText.initial,
        isDisabled && stylesThemes.appButtonText.disabled,
        pressed && stylesThemes.appButtonText.pressed,
      ]}>
      {({pressed}) => {
        return (
          <Text
            style={[
              styles.text,
              stylesThemes.appButtonTextText.initial,
              isDisabled && stylesThemes.appButtonTextText.disabled,
              pressed && stylesThemes.appButtonTextText.pressed,
            ]}>
            {text}
          </Text>
        );
      }}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    borderBottomWidth: 1,
  },
  text: {
    ...TYPOGRAPHY.Body_2_Medium_16,
    lineHeight: 23,
  },
});
