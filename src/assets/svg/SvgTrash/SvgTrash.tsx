import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import {SvgPropsInterface} from '@app/assets/svg/SvgPropsInterface';

export const SvgTrash = ({
  width = 32,
  height = 32,
  fill = '#C2534C',
  ...props
}: SvgPropsInterface) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 5.97v.303a65.101 65.101 0 0 1 5.17.683 1 1 0 1 1-.34 1.971 63.253 63.253 0 0 0-.28-.048l-1.34 17.428A4 4 0 0 1 21.222 30H10.778a4 4 0 0 1-3.988-3.693L5.45 8.879l-.28.048a1 1 0 0 1-.34-1.97A64.84 64.84 0 0 1 10 6.272v-.302c0-2.086 1.617-3.867 3.754-3.935a70.239 70.239 0 0 1 4.492 0C20.384 2.104 22 3.885 22 5.97Zm-8.182-1.935a68.27 68.27 0 0 1 4.364 0C19.19 4.067 20 4.912 20 5.97v.15a65.987 65.987 0 0 0-8 0v-.15c0-1.06.812-1.904 1.818-1.936Zm-.473 7.927a1 1 0 0 0-1.999.076l.462 12a1 1 0 1 0 1.998-.076l-.461-12Zm7.308.076a1 1 0 0 0-1.999-.076l-.461 12a1 1 0 0 0 1.998.076l.462-12Z"
        fill={fill}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
