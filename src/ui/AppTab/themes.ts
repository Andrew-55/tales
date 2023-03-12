import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    appTap: {
      active: {backgroundColor: COLORS.primary_default_light_mode},
      inactive: {backgroundColor: COLORS.color_500},
    },
    appTapText: {
      active: {color: COLORS.color_700},
      inactive: {color: COLORS.color_100},
    },
  },
  light: {
    appTap: {
      active: {backgroundColor: COLORS.primary_default_dark_mode},
      inactive: {backgroundColor: COLORS.color_150},
    },
    appTapText: {
      active: {color: COLORS.color_700},
      inactive: {color: COLORS.color_100},
    },
  },
};
