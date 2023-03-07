import React, {FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';

import {SvgPropsInterface} from '@app/assets/svg/SvgPropsInterface';
import {THEMES} from './themes';

type Props = {
  width?: number;
  height?: number;
  isDisabled?: boolean;
  Icon: FC<SvgPropsInterface>;
  themeVariant: keyof typeof THEMES;
  onPress?: () => void;
};

export const AppButtonIcon: FC<Props> = ({
  width,
  height,
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
          <Icon
            width={width}
            height={height}
            color={
              isDisabled
                ? stylesThemes.appButtonIcon.disabled.color
                : pressed
                ? stylesThemes.appButtonIcon.pressed.color
                : stylesThemes.appButtonIcon.initial.color
            }
          />
        );
      }}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
});
