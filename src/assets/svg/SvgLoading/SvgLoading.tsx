import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {SvgPropsInterface} from '@app/assets/svg/SvgPropsInterface';

export const SvgLoading = ({
  width = 24,
  height = 24,
  color = '#B8DE64',
  ...props
}: SvgPropsInterface) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle opacity={0.5} cx={12} cy={12} r={9} stroke="#fff" strokeWidth={2} />
    <Path d="M12 21a9 9 0 0 1-9-9" stroke={color} strokeWidth={2} />
  </Svg>
);
