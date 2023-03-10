import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {COLORS, TYPOGRAPHY} from '@app/assets/styles/constants';
import {SvgTrash} from '@app/assets/svg';

type Props = {
  isDisabled?: boolean;
  onPress?: () => void;
};

export const AppButtonDelete: FC<Props> = ({isDisabled, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [styles.pressable, pressed && styles.pressed]}
      disabled={isDisabled}>
      <View style={styles.view}>
        <SvgTrash color={COLORS.color_150} />
        <Text style={styles.text}>Delete</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    height: 364,
    alignSelf: 'flex-start',
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: COLORS.error,
    justifyContent: 'center',
    alignContent: 'center',
  },
  pressed: {
    opacity: 0.8,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 8,
  },
  text: {
    ...TYPOGRAPHY.Body_3_Medium_14,
    color: COLORS.color_150,
  },
});
