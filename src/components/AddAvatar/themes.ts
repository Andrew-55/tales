import {COLORS} from '@app/assets/styles/constants';

export const THEMES = {
  dark: {
    addAvatar: {
      backgroundColor: COLORS.color_700,
    },
    addAvatarText: COLORS.color_100,
    addAvatarConfirm: COLORS.primary_default_dark_mode,
    addAvatarCancel: COLORS.error,
    addAvatarTitleLine: {backgroundColor: COLORS.color_801},
  },
  light: {
    addAvatar: {
      backgroundColor: COLORS.color_100,
    },
    addAvatarText: COLORS.color_700,
    addAvatarConfirm: COLORS.primary_default_dark_mode,
    addAvatarCancel: COLORS.error,
    addAvatarTitleLine: {backgroundColor: COLORS.color_800},
  },
};
