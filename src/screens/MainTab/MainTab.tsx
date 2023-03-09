import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Main} from '../Main';
import {Favorites} from '../Favorites';
import {MyPosts} from '../MyPosts';
import {COLORS, TYPOGRAPHY} from '@app/assets/styles/constants';
import {SvgBookmark, SvgHome, SvgPhoto} from '@app/assets/svg';
import {THEMES} from './themes';

const Tab = createBottomTabNavigator();

export const MainTab = () => {
  const stylesThemes = THEMES.dark;

  const getColorIcon = (focused: boolean) => {
    return focused
      ? stylesThemes.mainTab.active
      : stylesThemes.mainTab.inActive;
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let icon;

          if (route.name === 'Main') {
            icon = <SvgHome color={getColorIcon(focused)} />;
          } else if (route.name === 'Favorites') {
            icon = <SvgBookmark color={getColorIcon(focused)} />;
          } else if (route.name === 'MyPosts') {
            icon = <SvgPhoto color={getColorIcon(focused)} />;
          }

          return icon;
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          ...styles.tabBar,
          ...stylesThemes.mainTabs.backgroundColor,
        },
        tabBarActiveTintColor: stylesThemes.mainTab.active,
        tabBarInactiveTintColor: stylesThemes.mainTab.inActive,
      })}>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="MyPosts" component={MyPosts} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    ...TYPOGRAPHY.Caption_1_Medium_12,
    height: 92,
    paddingTop: 16,
    paddingBottom: 24,
    backgroundColor: COLORS.color_700,
  },
});
