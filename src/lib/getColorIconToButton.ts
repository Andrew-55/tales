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
  switch (true) {
    case isDisabled:
      return colorVariants.disabled.color;
    case pressed:
      return colorVariants.pressed.color;
    default:
      return colorVariants.initial.color;
  }
};
