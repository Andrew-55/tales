import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    appButtonCircle: {
      initial: {backgroundColor: COLORS.primary_default_light_mode},
      pressed: {backgroundColor: COLORS.color_700},
      disabled: {backgroundColor: COLORS.color_400},
    },
    appButtonIconCircle: {
      initial: {color: COLORS.color_700},
      pressed: {color: COLORS.primary_default_light_mode},
      disabled: {color: COLORS.color_200},
    },
  },
  light: {
    appButtonCircle: {
      initial: {backgroundColor: COLORS.primary_default_dark_mode},
      pressed: {backgroundColor: COLORS.primary_pressed_dark_mode},
      disabled: {backgroundColor: COLORS.color_300},
    },
    appButtonIconCircle: {
      initial: {color: COLORS.color_100},
      pressed: {color: COLORS.color_100},
      disabled: {color: COLORS.color_200},
    },
  },
};
