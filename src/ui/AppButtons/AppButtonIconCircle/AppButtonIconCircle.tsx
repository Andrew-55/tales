import React, {FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';

import {SvgPropsInterface} from '@app/assets/svg/SvgPropsInterface';
import {THEMES} from './themes';

type Props = {
  width?: number;
  height?: number;
  padding?: number;
  isDisabled?: boolean;
  Icon: FC<SvgPropsInterface>;
  themeVariant: keyof typeof THEMES;
  onPress?: () => void;
};

export const AppButtonIconCircle: FC<Props> = ({
  width,
  height,
  padding = 8,
  isDisabled,
  themeVariant,
  Icon,
  onPress,
}) => {
  const stylesThemes = THEMES[themeVariant];

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.pressable,
        {padding: padding},
        stylesThemes.appButtonCircle.initial,
        isDisabled && stylesThemes.appButtonCircle.disabled,
        pressed && stylesThemes.appButtonCircle.pressed,
      ]}
      disabled={isDisabled}>
      {({pressed}) => {
        return (
          <Icon
            width={width}
            height={height}
            color={
              isDisabled
                ? stylesThemes.appButtonIconCircle.disabled.color
                : pressed
                ? stylesThemes.appButtonIconCircle.pressed.color
                : stylesThemes.appButtonIconCircle.initial.color
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
    borderRadius: 100,
  },
});
