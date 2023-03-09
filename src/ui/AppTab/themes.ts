import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    appTap: {
      active: {backgroundColor: COLORS.primary_default_light_mode},
      inActive: {backgroundColor: COLORS.color_500},
    },
    appTapText: {
      active: {color: COLORS.color_700},
      inActive: {color: COLORS.color_100},
    },
  },
  light: {
    appTap: {
      active: {backgroundColor: COLORS.primary_default_dark_mode},
      inActive: {backgroundColor: COLORS.color_150},
    },
    appTapText: {
      active: {color: COLORS.color_700},
      inActive: {color: COLORS.color_100},
    },
  },
};
