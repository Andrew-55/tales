import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {TYPOGRAPHY} from '@app/assets/styles/constants';
import {SvgPropsInterface} from '@app/assets/svg/SvgPropsInterface';
import {THEMES} from './themes';
import {getColorIconToButton} from '../functions';

type Props = {
  text: string;
  isDisabled?: boolean;
  Icon: FC<SvgPropsInterface>;
  themeVariant: keyof typeof THEMES;
  onPress?: () => void;
};

export const AppButtonIconText: FC<Props> = ({
  text,
  isDisabled,
  themeVariant,
  Icon,
  onPress,
}) => {
  const stylesThemes = THEMES[themeVariant];

  return (
    <Pressable onPress={onPress} style={styles.pressable} disabled={isDisabled}>
      {({pressed}) => {
        return (
          <View style={styles.view}>
            <Icon
              color={getColorIconToButton(
                stylesThemes.appButtonIconText,
                pressed,
                isDisabled,
              )}
            />
            <Text
              style={[
                styles.text,
                stylesThemes.appButtonIconText.initial,
                isDisabled && stylesThemes.appButtonIconText.disabled,
                pressed && stylesThemes.appButtonIconText.pressed,
              ]}>
              {text}
            </Text>
          </View>
        );
      }}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 8,
    justifyContent: 'space-between',
  },
  text: {...TYPOGRAPHY.Body_4_Regular_18},
});
