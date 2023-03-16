import React, {FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';

import {SvgPropsInterface} from '@app/assets/svg/SvgPropsInterface';
import {THEMES} from './themes';
import {getColorIconToButton} from '@app/lib';
import {ThemeVariantType} from '@app/components';

type Props = {
  width?: number;
  height?: number;
  isDisabled?: boolean;
  isActive?: boolean;
  Icon: FC<SvgPropsInterface>;
  themeVariant: ThemeVariantType;
  onPress?: () => void;
};

export const AppButtonIcon: FC<Props> = ({
  width,
  height,
  isDisabled,
  themeVariant,
  Icon,
  isActive,
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
              isActive
                ? stylesThemes.appButtonIcon.pressed.color
                : getColorIconToButton(
                    stylesThemes.appButtonIcon,
                    pressed,
                    isDisabled,
                  )
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
