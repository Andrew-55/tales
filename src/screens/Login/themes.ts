import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    login: {
      backgroundColor: COLORS.color_700,
    },
    loginTitle: {
      color: COLORS.primary_default_light_mode,
    },
    loginText: {
      color: COLORS.color_100,
    },
  },
  light: {
    login: {
      backgroundColor: COLORS.color_100,
    },
    loginTitle: {
      color: COLORS.primary_default_dark_mode,
    },
    loginText: {
      color: COLORS.color_700,
    },
  },
};
