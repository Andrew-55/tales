import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import {SvgPropsInterface} from '@app/assets/svg/SvgPropsInterface';

export const SvgCheckCircle = ({
  width = 18,
  height = 18,
  stroke = '#B8DE64',
  ...props
}: SvgPropsInterface) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M6.5 9.313 8.188 11 11 7.062m4.5 1.688a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
        stroke={stroke}
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
