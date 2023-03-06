import React, {FC, useEffect, useRef} from 'react';
import {Pressable, Animated, StyleSheet} from 'react-native';
import {COLORS} from '@app/assets/styles/constants';
import {SvgLoading} from '@app/assets/svg';
import {AppText} from '../AppText';

type SizeType = keyof typeof SIZE;

type Props = {
  text: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isDelete?: boolean;
  size: SizeType;
  onPress?: () => void;
};

export const AppButton: FC<Props> = ({
  text,
  size,
  isLoading,
  isDisabled,
  isDelete,
  onPress,
}) => {
  const value = useRef(new Animated.Value(0)).current;

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
        pressed && styles.pressed,
      ]}
      disabled={isDisabled}>
      {({pressed}) => {
        return isLoading ? (
          <Animated.View
            style={{
              transform: [{rotate: deg}],
            }}>
            <SvgLoading />
          </Animated.View>
        ) : (
          <AppText
            variant="Body_2_Medium_16"
            color={
              pressed
                ? 'color_700'
                : isDelete
                ? 'error'
                : isDisabled
                ? 'color_400'
                : 'primary_default_light_mode'
            }>
            {text}
          </AppText>
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
    backgroundColor: COLORS.color_500,
  },
  medium: {
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: COLORS.color_700,
  },
  small: {
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: COLORS.color_700,
    width: 148,
  },
});

const SIZE = {
  Large: styles.large,
  Medium: styles.medium,
  Small: styles.small,
};
