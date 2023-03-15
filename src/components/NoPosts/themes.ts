import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    noPostsUps: {
      backgroundColor: COLORS.primary_default_light_mode,
    },
    noPostsUpsText: {
      color: COLORS.color_700,
    },
    noPostsText: {
      color: COLORS.color_400,
    },
  },
  light: {
    noPostsUps: {
      backgroundColor: COLORS.primary_default_dark_mode,
    },
    noPostsUpsText: {
      color: COLORS.color_100,
    },
    noPostsText: {
      color: COLORS.color_700,
    },
  },
};
