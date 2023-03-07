import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    appButtonIcon: {
      initial: {color: COLORS.color_100},
      pressed: {color: COLORS.primary_default_light_mode},
      disabled: {color: COLORS.color_400},
    },
  },
  light: {
    appButtonIcon: {
      initial: {color: COLORS.color_700},
      pressed: {color: COLORS.primary_pressed_dark_mode},
      disabled: {color: COLORS.color_300},
    },
  },
};
