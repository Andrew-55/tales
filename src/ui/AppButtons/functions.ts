type colorVariantsType = {
  initial: {color: string};
  pressed: {color: string};
  disabled: {color: string};
};

export const getColorIconToButton = (
  colorVariants: colorVariantsType,
  pressed: boolean,
  isDisabled?: boolean,
) => {
  if (isDisabled) {
    return colorVariants.disabled.color;
  }
  if (pressed) {
    return colorVariants.pressed.color;
  }
  return colorVariants.initial.color;
};
