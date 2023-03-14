import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    appInput: {
      initial: {
        color: COLORS.color_300,
        borderBottomColor: COLORS.color_300,
      },
      isValue: {
        color: COLORS.color_100,
        borderBottomColor: COLORS.color_100,
      },
      isDisable: {
        color: COLORS.color_500,
        borderBottomColor: COLORS.color_500,
      },
      isSuccess: {
        color: COLORS.primary_default_light_mode,
        borderBottomColor: COLORS.primary_default_light_mode,
      },
      isError: {
        color: COLORS.error,
        borderBottomColor: COLORS.error,
      },
    },
    appInputPlaceholderColor: COLORS.color_300,
    appInputLabel: {
      color: COLORS.color_300,
    },
  },
  light: {
    appInput: {
      initial: {
        color: COLORS.color_300,
        borderBottomColor: COLORS.color_300,
      },
      isValue: {
        color: COLORS.color_700,
        borderBottomColor: COLORS.color_700,
      },
      isDisable: {
        color: COLORS.color_200,
        borderBottomColor: COLORS.color_200,
      },
      isSuccess: {
        color: COLORS.primary_default_dark_mode,
        borderBottomColor: COLORS.primary_default_dark_mode,
      },
      isError: {
        color: COLORS.error,
        borderBottomColor: COLORS.error,
      },
    },
    appInputPlaceholderColor: COLORS.color_300,
    appInputLabel: {
      color: COLORS.color_300,
    },
  },
};
