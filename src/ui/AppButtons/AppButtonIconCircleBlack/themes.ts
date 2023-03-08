import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    appButtonCircleBlack: {
      initial: {backgroundColor: COLORS.color_500},
      pressed: {backgroundColor: COLORS.primary_default_light_mode},
      disabled: {backgroundColor: COLORS.color_400},
    },
    appButtonIconCircleBlack: {
      initial: {color: COLORS.color_700},
      pressed: {color: COLORS.color_700},
      disabled: {color: COLORS.color_700},
    },
  },
  light: {
    appButtonCircleBlack: {
      initial: {backgroundColor: COLORS.color_500},
      pressed: {backgroundColor: COLORS.primary_default_dark_mode},
      disabled: {backgroundColor: COLORS.color_400},
    },
    appButtonIconCircleBlack: {
      initial: {color: COLORS.color_400},
      pressed: {color: COLORS.color_700},
      disabled: {color: COLORS.color_300},
    },
  },
};
