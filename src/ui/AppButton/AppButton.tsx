import React, {FC, useEffect, useRef} from 'react';
import {Pressable, Animated, StyleSheet, Text} from 'react-native';

import {COLORS, TYPOGRAPHY} from '@app/assets/styles/constants';
import {SvgLoading} from '@app/assets/svg';
import {THEMES} from './themes';

type SizeType = keyof typeof SIZE;

type Props = {
  text: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isDelete?: boolean;
  size: SizeType;
  themeVariant: keyof typeof THEMES;
  onPress?: () => void;
};

export const AppButton: FC<Props> = ({
  text,
  size,
  isLoading,
  isDisabled,
  isDelete,
  themeVariant,
  onPress,
}) => {
  const value = useRef(new Animated.Value(0)).current;

  const stylesThemes = THEMES[themeVariant];

  const deg = value.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animate_state = {
    start: 0,
    end: 1,
  };

  useEffect(() => {
    const startAnimate = () => {
      Animated.loop(
        Animated.timing(value, {
          toValue: animate_state.end,
          duration: 500,
          useNativeDriver: true,
        }),
      ).start();
    };

    if (isLoading) {
      startAnimate();
    }
  }, [animate_state.end, isLoading, value]);

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.pressable,
        SIZE[size],
        stylesThemes.appButton[size],
        isDisabled && !isLoading && stylesThemes.appButton.disabled,
        pressed &&
          (size === 'Medium'
            ? stylesThemes.appButton.pressedMedium
            : stylesThemes.appButton.pressed),
      ]}
      disabled={isDisabled}>
      {({pressed}) => {
        return isLoading ? (
          <Animated.View
            style={{
              transform: [{rotate: deg}],
            }}>
            <SvgLoading color={stylesThemes.appButtonSvgLoading} />
          </Animated.View>
        ) : (
          <Text
            style={[
              styles.text,
              stylesThemes.appButtonText[size],
              isDelete && stylesThemes.appButtonText.delete,
              isDisabled && stylesThemes.appButtonText.disabled,
              pressed && stylesThemes.appButtonText.pressed,
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
    paddingTop: 16,
    paddingRight: 32,
    paddingBottom: 16,
    paddingLeft: 32,
    borderRadius: 21,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pressed: {
    backgroundColor: COLORS.primary_default_light_mode,
  },
  large: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  medium: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  small: {
    paddingTop: 12,
    paddingBottom: 12,
    width: 148,
  },
  text: {...TYPOGRAPHY.Body_2_Medium_16},
});

const SIZE = {
  Large: styles.large,
  Medium: styles.medium,
  Small: styles.small,
};
