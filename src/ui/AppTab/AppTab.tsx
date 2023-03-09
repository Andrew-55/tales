import React, {FC, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {TYPOGRAPHY} from '@app/assets/styles/constants';
import {THEMES} from './themes';

type Props = {
  themeVariant: keyof typeof THEMES;
  onPressNew: () => void;
  onPressTop: () => void;
};

export const AppTab: FC<Props> = ({themeVariant, onPressNew, onPressTop}) => {
  const [isNew, setIsNew] = useState(true);
  const stylesThemes = THEMES[themeVariant];

  const handlePressNew = () => {
    setIsNew(true);
    onPressNew();
  };
  const handlePressTop = () => {
    setIsNew(false);
    onPressTop();
  };

  const getActiveColorText = (active: boolean) => {
    return active
      ? stylesThemes.appTapText.active
      : stylesThemes.appTapText.inActive;
  };

  const getActiveColorTab = (active: boolean) => {
    return active ? stylesThemes.appTap.active : stylesThemes.appTap.inActive;
  };

  return (
    <View style={styles.view}>
      <Pressable
        onPress={handlePressNew}
        style={[
          styles.pressable,
          styles.pressableNew,
          getActiveColorTab(isNew),
        ]}>
        <Text style={[styles.text, getActiveColorText(isNew)]}>New</Text>
      </Pressable>
      <Pressable
        onPress={handlePressTop}
        style={[
          styles.pressable,
          styles.pressableTop,
          getActiveColorTab(!isNew),
        ]}>
        <Text style={[styles.text, getActiveColorText(!isNew)]}>Top</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  pressable: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressableNew: {
    borderTopStartRadius: 16,
    borderBottomStartRadius: 16,
  },
  pressableTop: {
    borderTopEndRadius: 16,
    borderBottomEndRadius: 16,
  },
  text: {
    ...TYPOGRAPHY.Body_4_Regular_18,
  },
});
