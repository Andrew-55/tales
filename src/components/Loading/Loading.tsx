import React, {FC, useContext, useEffect, useRef} from 'react';
import {View, Animated, StyleSheet, Modal} from 'react-native';

import {AppText} from '@app/ui';
import {THEMES} from './themes';
import {SvgLoading} from '@app/assets/svg';
import {COLORS} from '@app/assets/styles/constants';
import {Theme} from '@app/components';

type Props = {
  message: string;
};

export const Loading: FC<Props> = ({message}) => {
  const {themeVariant} = useContext(Theme);
  const stylesThemes = THEMES[themeVariant];

  const value = useRef(new Animated.Value(0)).current;
  const deg = value.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
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
          duration: 1000,
          useNativeDriver: true,
        }),
      ).start();
    };

    startAnimate();
  }, [animate_state.end, value]);

  return (
    <Modal transparent={true} animationType="fade">
      <View style={styles.container}>
        <View>
          <AppText
            variant="Title_4_Semibold_20"
            style={[styles.message, stylesThemes.loadingText]}>
            {message}
          </AppText>
          <Animated.View
            style={{
              transform: [{rotate: deg}],
            }}>
            <SvgLoading
              width={200}
              height={200}
              color={stylesThemes.loadingSvgLoading}
            />
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: COLORS.color_802,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    opacity: 0.8,
  },
  message: {
    marginBottom: 10,
  },
});
