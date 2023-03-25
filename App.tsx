import React from 'react';
import {Navigation} from '@app/screens/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {ApolloProvider} from '@apollo/client';
import {StatusBarComponent, ThemeProvider} from '@app/components';
import {client} from '@app/entities';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ApolloProvider client={client}>
          <StatusBarComponent />
          <Navigation />
        </ApolloProvider>
        <Toast />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
