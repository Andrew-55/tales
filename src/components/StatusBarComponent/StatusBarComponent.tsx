import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {Theme} from '@app/../App';

export const StatusBarComponent = () => {
  const {themeVariant} = useContext(Theme);
  const isDark = themeVariant === 'dark';

  return (
    <StatusBar
      animated={true}
      backgroundColor="transparent"
      translucent={true}
      barStyle={isDark ? 'light-content' : 'dark-content'}
    />
  );
};
