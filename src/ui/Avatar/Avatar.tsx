import {SvgUser} from '@app/assets/svg';
import {ThemeVariantType} from '@app/components';
import React, {FC} from 'react';
import {Image, View} from 'react-native';

import {THEMES} from './themes';

type Props = {
  size: number;
  themeVariant: ThemeVariantType;
  avatarUrl?: string;
};

export const Avatar: FC<Props> = ({avatarUrl = '', themeVariant, size}) => {
  const stylesThemes = THEMES[themeVariant];

  return (
    <>
      {avatarUrl ? (
        <Image
          source={{uri: avatarUrl, width: size, height: size}}
          style={{borderRadius: size}}
        />
      ) : (
        <View style={[stylesThemes.avatar, {borderRadius: size}]}>
          <SvgUser
            width={size}
            height={size}
            color={stylesThemes.avatarSvgColor}
          />
        </View>
      )}
    </>
  );
};
