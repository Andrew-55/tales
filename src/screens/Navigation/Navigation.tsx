import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {
  UiKit,
  MainTab,
  Registration,
  Login,
  CreatePost,
  Post,
  Profile,
  Welcome,
} from '@app/screens';
import {Theme} from '@app/components';
import {THEMES} from './themes';

const Stack = createNativeStackNavigator();
const linking = {
  prefixes: ['tales://'],
};

export enum NAVIGATION_SCREEN {
  MAIN_TAB = 'MainTab',
  WELCOME = 'Welcome',
  LOGIN = 'Login',
  REGISTRATION = 'Registration',
  POST = 'Post',
  CREATE_POST = 'CreatePost',
  PROFILE = 'Profile',
}

export const Navigation = () => {
  const {themeVariant} = useContext(Theme);
  const stylesThemes = THEMES[themeVariant];

  return (
    <View style={[styles.container, stylesThemes.navigation]}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen
            name={NAVIGATION_SCREEN.MAIN_TAB}
            component={MainTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NAVIGATION_SCREEN.WELCOME}
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NAVIGATION_SCREEN.LOGIN}
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NAVIGATION_SCREEN.REGISTRATION}
            component={Registration}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NAVIGATION_SCREEN.POST}
            component={Post}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NAVIGATION_SCREEN.CREATE_POST}
            component={CreatePost}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NAVIGATION_SCREEN.PROFILE}
            component={Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen name="UiKit" component={UiKit} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
