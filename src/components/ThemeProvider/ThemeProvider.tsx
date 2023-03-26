import React, {createContext, FC, useMemo, useState} from 'react';

export enum THEME_VARIANT {
  DARK = 'dark',
  LIGHT = 'light',
}

export type ThemeVariantType = THEME_VARIANT;

export const Theme = createContext({
  themeVariant: THEME_VARIANT.DARK,
  isDarkThemeVariant: true,
  handleChangeTheme: (variant: THEME_VARIANT) => {
    variant;
  },
});

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export const ThemeProvider: FC<Props> = ({children}) => {
  const [themeVariant, setThemeVariant] = useState(THEME_VARIANT.DARK);
  const handleChangeTheme = (variant: THEME_VARIANT) => {
    setThemeVariant(variant);
  };
  const isDarkThemeVariant = themeVariant === THEME_VARIANT.DARK;

  const value = useMemo(
    () => ({themeVariant, isDarkThemeVariant, handleChangeTheme}),
    [themeVariant, isDarkThemeVariant],
  );

  return <Theme.Provider value={value}>{children}</Theme.Provider>;
};
