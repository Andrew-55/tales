import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';

import {THEMES} from './themes';
import {AppText} from '../AppText';
import {SvgCloudArrowUp} from '@app/assets/svg';
import {ThemeVariantType} from '@app/components';

type Props = {
  uri?: string;
  themeVariant: ThemeVariantType;
  onPress?: () => void;
};

export const Upload: FC<Props> = ({uri, themeVariant, onPress}) => {
  const stylesThemes = THEMES[themeVariant];

  return (
    <Pressable onPress={onPress}>
      {uri ? (
        <Image
          source={{uri: uri, width: 500, height: 400}}
          style={styles.image}
        />
      ) : (
        <View style={[styles.pressable, stylesThemes.upload]}>
          <SvgCloudArrowUp width={36} height={36} />
          <AppText variant="Body_3_Medium_14" style={stylesThemes.uploadText}>
            Upload your photo here
          </AppText>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    paddingTop: 44,
    paddingBottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    rowGap: 8,
    borderStyle: 'dashed',
    borderWidth: 1.5,
  },
  image: {
    width: '100%',
    height: 225,
    borderRadius: 17,
    marginBottom: 20,
  },
});
