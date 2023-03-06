import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    appButton: {
      pressed: {
        backgroundColor: COLORS.primary_default_light_mode,
      },
      pressedMedium: {
        backgroundColor: COLORS.primary_default_light_mode,
      },
      disabled: {},
      Large: {
        backgroundColor: COLORS.color_500,
      },
      Medium: {
        backgroundColor: COLORS.color_700,
      },
      Small: {
        backgroundColor: COLORS.color_700,
      },
    },
    appButtonText: {
      pressed: {color: COLORS.color_700},
      delete: {color: COLORS.error},
      disabled: {color: COLORS.color_400},
      Large: {color: COLORS.primary_default_light_mode},
      Medium: {color: COLORS.primary_default_light_mode},
      Small: {color: COLORS.primary_default_light_mode},
    },
  },
  light: {
    appButton: {
      pressed: {
        backgroundColor: COLORS.primary_pressed_dark_mode,
      },
      pressedMedium: {
        backgroundColor: COLORS.primary_default_dark_mode,
      },
      disabled: {
        backgroundColor: COLORS.color_200,
      },
      Large: {
        backgroundColor: COLORS.primary_default_dark_mode,
      },
      Medium: {
        backgroundColor: COLORS.color_100,
      },
      Small: {
        backgroundColor: COLORS.primary_default_dark_mode,
      },
    },
    appButtonText: {
      pressed: {color: COLORS.color_100},
      delete: {color: COLORS.error},
      disabled: {color: COLORS.color_400},
      Large: {color: COLORS.color_100},
      Medium: {color: COLORS.primary_default_light_mode},
      Small: {color: COLORS.color_100},
    },
  },
};
