import React, {FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';

import {SvgPropsInterface} from '@app/assets/svg/SvgPropsInterface';
import {THEMES} from './themes';
import {getColorIconToButton} from '@app/lib/logic-functions';

type Props = {
  width?: number;
  height?: number;
  padding?: number;
  isDisabled?: boolean;
  Icon: FC<SvgPropsInterface>;
  themeVariant: keyof typeof THEMES;
  onPress?: () => void;
};

export const AppButtonIconCircleBlack: FC<Props> = ({
  width = 13,
  height = 13,
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
        stylesThemes.appButtonCircleBlack.initial,
        isDisabled && stylesThemes.appButtonCircleBlack.disabled,
        pressed && stylesThemes.appButtonCircleBlack.pressed,
      ]}
      disabled={isDisabled}>
      {({pressed}) => {
        return (
          <Icon
            width={width}
            height={height}
            color={getColorIconToButton(
              stylesThemes.appButtonIconCircleBlack,
              pressed,
              isDisabled,
            )}
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
