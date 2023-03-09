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
      inActive: COLORS.color_400,
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
      inActive: COLORS.color_200,
    },
  },
};
