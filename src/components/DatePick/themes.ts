import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    datePick: {
      backgroundColor: COLORS.color_700,
    },
    datePickText: COLORS.color_100,
    datePickConfirm: COLORS.primary_default_dark_mode,
    datePickCancel: COLORS.error,
    datePickTitleLine: {backgroundColor: COLORS.color_801},
  },
  light: {
    datePick: {
      backgroundColor: COLORS.color_100,
    },
    datePickText: COLORS.color_700,
    datePickConfirm: COLORS.primary_default_dark_mode,
    datePickCancel: COLORS.error,
    datePickTitleLine: {backgroundColor: COLORS.color_800},
  },
};
