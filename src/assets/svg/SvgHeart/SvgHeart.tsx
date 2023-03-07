import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import {SvgPropsInterface} from '@app/assets/svg/SvgPropsInterface';

export const SvgHeart = ({
  width = 18,
  height = 18,
  color = '#DEDEDE',
  ...props
}: SvgPropsInterface) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_81_3697)">
      <Path
        d="M17.1 5.727C17.1 3.558 15.21 1.8 12.88 1.8 11.14 1.8 9.644 2.783 9 4.186 8.356 2.783 6.86 1.8 5.119 1.8c-2.33 0-4.22 1.758-4.22 3.927C.9 12.03 9 16.2 9 16.2s8.1-4.171 8.1-10.473Z"
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_81_3697">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
