import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import {SvgPropsInterface} from '@app/assets/svg/SvgPropsInterface';

export const SvgShare = ({
  width = 20,
  height = 20,
  fill = '#DEDEDE',
  ...props
}: SvgPropsInterface) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.125 3.75a2.5 2.5 0 1 1 .688 1.722L6.795 9.37a2.503 2.503 0 0 1 0 1.258l7.018 3.9a2.5 2.5 0 1 1-.607 1.092l-7.019-3.9a2.5 2.5 0 1 1 0-3.444l7.018-3.898a2.502 2.502 0 0 1-.08-.629Z"
        fill={fill}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
