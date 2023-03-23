import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
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

export const Navigation = () => {
  const {themeVariant} = useContext(Theme);
  const stylesThemes = THEMES[themeVariant];

  return (
    <View style={[styles.container, stylesThemes.navigation]}>
      <NavigationContainer
        linking={linking}
        fallback={<ActivityIndicator color="blue" size="large" />}>
        <Stack.Navigator>
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Post"
            component={Post}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CreatePost"
            component={CreatePost}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
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
