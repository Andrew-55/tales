import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    favorites: {
      backgroundColor: COLORS.color_700,
    },
    favoritesHeaderText: {
      color: COLORS.color_100,
    },
    favoritesUps: {
      backgroundColor: COLORS.primary_default_light_mode,
    },
    favoritesUpsText: {
      color: COLORS.color_700,
    },
    favoritesText: {
      color: COLORS.color_400,
    },
  },
  light: {
    favorites: {
      backgroundColor: COLORS.color_100,
    },
    favoritesHeaderText: {
      color: COLORS.color_700,
    },
    favoritesUps: {
      backgroundColor: COLORS.primary_default_dark_mode,
    },
    favoritesUpsText: {
      color: COLORS.color_100,
    },
    favoritesText: {
      color: COLORS.color_700,
    },
  },
};
