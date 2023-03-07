import React, {FC, useEffect, useRef} from 'react';
import {Pressable, Animated, StyleSheet, Text, View} from 'react-native';

import {COLORS, TYPOGRAPHY} from '@app/assets/styles/constants';
import {SvgPropsInterface} from '@app/assets/svg/SvgPropsInterface';
import {SvgLoading} from '@app/assets/svg';
import {THEMES} from './themes';

type Props = {
  text: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isDarkMode?: boolean;
  Icon: FC<SvgPropsInterface>;
  themeVariant: keyof typeof THEMES;
  onPress?: () => void;
};

export const AppButtonTextIcon: FC<Props> = ({
  text,
  isLoading,
  isDisabled,
  themeVariant,
  isDarkMode,
  Icon,
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
        stylesThemes.appButtonTextIcon.initial,
        isDisabled && !isLoading && stylesThemes.appButtonTextIcon.disabled,
        pressed && stylesThemes.appButtonTextIcon.pressed,
      ]}
      disabled={isDisabled}>
      {({pressed}) => {
        return isLoading ? (
          <Animated.View
            style={{
              transform: [{rotate: deg}],
            }}>
            <SvgLoading
              stroke={
                isDarkMode
                  ? COLORS.primary_default_light_mode
                  : COLORS.primary_pressed_dark_mode
              }
            />
          </Animated.View>
        ) : (
          <View style={styles.view}>
            <Text
              style={[
                styles.text,
                stylesThemes.appButtonTextIconText.initial,
                isDisabled && stylesThemes.appButtonTextIconText.disabled,
                pressed && stylesThemes.appButtonTextIconText.pressed,
              ]}>
              {text}
            </Text>
            <Icon
              color={
                isDisabled
                  ? stylesThemes.appButtonTextIconText.disabled.color
                  : pressed
                  ? stylesThemes.appButtonTextIconText.pressed.color
                  : stylesThemes.appButtonTextIconText.initial.color
              }
            />
          </View>
        );
      }}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  view: {
    color: '#ff0000',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {...TYPOGRAPHY.Body_4_Regular_18},
});
