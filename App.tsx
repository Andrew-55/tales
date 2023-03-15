import React, {createContext, useMemo, useState} from 'react';
import {Navigation} from '@app/screens/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBarComponent} from '@app/components';

export const Theme = createContext({
  themeVariant: 'dark' as 'dark' | 'light',
  handleChangeTheme: (variant: 'dark' | 'light') => {
    variant;
  },
});

function App(): JSX.Element {
  const [themeVariant, setThemeVariant] = useState<'dark' | 'light'>('dark');
  const handleChangeTheme = (variant: 'dark' | 'light') => {
    setThemeVariant(variant);
  };

  const value = useMemo(
    () => ({themeVariant, handleChangeTheme}),
    [themeVariant],
  );

  return (
    <SafeAreaProvider>
      <Theme.Provider value={value}>
        <StatusBarComponent />
        <Navigation />
      </Theme.Provider>
    </SafeAreaProvider>
  );
}

export default App;
