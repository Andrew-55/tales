import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {UiKit} from '../UiKit';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UiKit"
          component={UiKit}
          options={{title: 'Ui Kit'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
