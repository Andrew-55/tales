import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    appButtonText: {
      initial: {borderBottomColor: COLORS.primary_default_light_mode},
      pressed: {borderBottomColor: COLORS.primary_pressed_light},
      disabled: {borderBottomColor: COLORS.color_400},
    },
    appButtonTextText: {
      initial: {color: COLORS.primary_default_light_mode},
      pressed: {color: COLORS.primary_pressed_light},
      disabled: {color: COLORS.color_400},
    },
  },
  light: {
    appButtonText: {
      initial: {borderBottomColor: COLORS.primary_default_dark_mode},
      pressed: {borderBottomColor: COLORS.primary_pressed_dark_mode},
      disabled: {borderBottomColor: COLORS.color_200},
    },
    appButtonTextText: {
      initial: {color: COLORS.primary_default_dark_mode},
      pressed: {color: COLORS.primary_pressed_dark_mode},
      disabled: {color: COLORS.color_200},
    },
  },
};
