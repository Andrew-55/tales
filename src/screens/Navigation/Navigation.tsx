import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {UiKit, MainTab, MyPosts, Registration, Login} from '@app/screens';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
        <Stack.Screen name="UiKit" component={UiKit} />
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MyPost" component={MyPosts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
