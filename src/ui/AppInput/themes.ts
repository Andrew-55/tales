import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    appInput: {
      initial: {
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
    },
    appInputPlaceholderColor: COLORS.color_300,
    appInputLabel: {
      color: COLORS.color_300,
    },
  },
  light: {
    appInput: {
      initial: {
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
    },
    appInputPlaceholderColor: COLORS.color_300,
    appInputLabel: {
      color: COLORS.color_300,
    },
  },
};
