import React, {FC} from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import {COLORS, TextVariants, TYPOGRAPHY} from '@app/assets/styles/constants';

export type TextColors = keyof typeof COLORS;

type Props = RNTextProps & {
  children: React.ReactNode;
  variant?: TextVariants;
  color?: TextColors;
};

export const AppText: FC<Props> = ({
  children,
  variant = 'Body_1_Medium_18',
  color = 'color_100',
  style,
  ...rnTextProps
}) => {
  return (
    <RNText
      style={[TYPOGRAPHY[variant], {color: COLORS[color]}, style]}
      {...rnTextProps}
      allowFontScaling={false}>
      {children}
    </RNText>
  );
};
