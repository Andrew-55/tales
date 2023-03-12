import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    mainTabs: {
      backgroundColor: {
        backgroundColor: COLORS.color_700,
      },
    },
    mainTab: {
      active: COLORS.primary_default_light_mode,
      inactive: COLORS.color_400,
    },
  },
  light: {
    mainTabs: {
      backgroundColor: {
        backgroundColor: COLORS.color_100,
      },
    },
    mainTab: {
      active: COLORS.primary_default_dark_mode,
      inactive: COLORS.color_200,
    },
  },
};
