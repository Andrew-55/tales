import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import {SvgPropsInterface} from '@app/assets/svg/SvgPropsInterface';

export const SvgCamera = ({
  width = 22,
  height = 22,
  color = '#131313',
  ...props
}: SvgPropsInterface) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_81_3775)" fill={color}>
      <Path d="M11 8.25a3.437 3.437 0 1 0 0 6.875 3.437 3.437 0 0 0 0-6.875Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.566 2.815a45.4 45.4 0 0 1 4.868 0 2.697 2.697 0 0 1 2.139 1.275l.752 1.206c.22.352.592.59 1.018.65.353.051.705.105 1.056.164 1.312.218 2.226 1.368 2.226 2.666V16.5a2.75 2.75 0 0 1-2.75 2.75H4.125a2.75 2.75 0 0 1-2.75-2.75V8.776c0-1.298.914-2.448 2.226-2.666.35-.059.703-.113 1.056-.163.426-.06.799-.3 1.018-.65l.753-1.207a2.697 2.697 0 0 1 2.138-1.275Zm-2.379 8.872a4.813 4.813 0 1 1 9.626 0 4.813 4.813 0 0 1-9.626 0Zm11-1.374a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.374Z"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_81_3775">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
