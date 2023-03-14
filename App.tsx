import React from 'react';
import {StatusBar} from 'react-native';
import {Navigation} from '@app/screens/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        translucent={true}
      />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
