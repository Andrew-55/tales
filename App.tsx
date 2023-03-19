import React from 'react';
import {Navigation} from '@app/screens/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApolloProvider} from '@apollo/client';
import {StatusBarComponent, ThemeProvider} from '@app/components';
import {client} from '@app/services';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ApolloProvider client={client}>
          <StatusBarComponent />
          <Navigation />
        </ApolloProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
