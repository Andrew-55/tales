import React from 'react';
import {Navigation} from '@app/screens/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBarComponent, ThemeProvider} from '@app/components';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StatusBarComponent />
        <Navigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
