import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    registration: {
      backgroundColor: COLORS.color_700,
    },
    registrationTitle: {
      color: COLORS.primary_default_light_mode,
    },
    registrationText: {
      color: COLORS.color_100,
    },
  },
  light: {
    registration: {
      backgroundColor: COLORS.color_100,
    },
    registrationTitle: {
      color: COLORS.primary_default_dark_mode,
    },
    registrationText: {
      color: COLORS.color_700,
    },
  },
};
