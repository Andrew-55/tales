export const getKeyColorTextToAppButton = (
  isDarkMode: boolean | undefined,
  pressed: boolean,
  isDelete: boolean | undefined,
  isDisabled: boolean | undefined,
) => {
  if (isDelete && !pressed) {
    return 'error';
  }

  if (isDarkMode) {
    if (pressed) {
      return 'color_700';
    }
    if (isDisabled) {
      return 'color_400';
    }
    return 'primary_default_light_mode';
  }

  if (!isDarkMode) {
    if (pressed) {
      return 'color_100';
    }

    if (isDisabled) {
      return 'color_300';
    }
    return 'color_100';
  }
};
