import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {Theme} from '@app/components';

export const StatusBarComponent = () => {
  const {isDarkThemeVariant} = useContext(Theme);

  return (
    <StatusBar
      animated={true}
      backgroundColor="transparent"
      translucent={true}
      barStyle={isDarkThemeVariant ? 'light-content' : 'dark-content'}
    />
  );
};
