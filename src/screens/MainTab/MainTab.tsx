import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Theme} from '@app/../App';

import {Main} from '../Main';
import {Favorites} from '../Favorites';
import {MyPosts} from '../MyPosts';
import {COLORS, TYPOGRAPHY} from '@app/assets/styles/constants';
import {SvgBookmark, SvgHome, SvgPhoto} from '@app/assets/svg';
import {THEMES} from './themes';

const Tab = createBottomTabNavigator();

enum PAGES {
  MAIN = 'Main',
  FAVORITES = 'Favorites',
  MY_POSTS = 'MyPosts',
}

export const MainTab = () => {
  const {themeVariant} = useContext(Theme);
  const stylesThemes = THEMES[themeVariant];

  const getColorIcon = (isFocused: boolean) => {
    return isFocused
      ? stylesThemes.mainTab.active
      : stylesThemes.mainTab.inactive;
  };

  const getTabBarIcon = (name: string, isFocused: boolean) => {
    switch (name) {
      case PAGES.MAIN:
        return <SvgHome color={getColorIcon(isFocused)} />;
      case PAGES.FAVORITES:
        return <SvgBookmark color={getColorIcon(isFocused)} />;
      case PAGES.MY_POSTS:
        return <SvgPhoto color={getColorIcon(isFocused)} />;
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => getTabBarIcon(route.name, focused),
        headerShown: false,
        tabBarStyle: {
          ...styles.tabBar,
          ...stylesThemes.mainTabs.backgroundColor,
        },
        tabBarActiveTintColor: stylesThemes.mainTab.active,
        tabBarInactiveTintColor: stylesThemes.mainTab.inactive,
      })}>
      <Tab.Screen name={PAGES.MAIN} component={Main} />
      <Tab.Screen name={PAGES.FAVORITES} component={Favorites} />
      <Tab.Screen name={PAGES.MY_POSTS} component={MyPosts} />
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
