import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    appButtonTextIcon: {
      initial: {
        backgroundColor: COLORS.color_500,
      },
      pressed: {
        backgroundColor: COLORS.primary_default_light_mode,
      },
      disabled: {
        backgroundColor: COLORS.color_400,
      },
    },
    appButtonTextIconText: {
      initial: {color: COLORS.color_100},
      pressed: {color: COLORS.color_500},
      disabled: {color: COLORS.color_200},
    },
  },
  light: {
    appButtonTextIcon: {
      initial: {
        backgroundColor: COLORS.color_200,
      },
      pressed: {
        backgroundColor: COLORS.primary_default_dark_mode,
      },
      disabled: {
        backgroundColor: COLORS.color_200,
      },
    },
    appButtonTextIconText: {
      initial: {color: COLORS.color_700},
      pressed: {color: COLORS.color_700},
      disabled: {color: COLORS.color_300},
    },
  },
};
