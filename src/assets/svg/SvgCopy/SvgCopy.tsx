import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import {SvgPropsInterface} from '@app/assets/svg/SvgPropsInterface';

export const SvgCopy = ({
  width = 24,
  height = 24,
  color = '#ffffff',
  ...props
}: SvgPropsInterface) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_81_3742)">
      <Path
        d="M4 20.278c0 1.735.855 2.607 2.573 2.607h7.803c1.718 0 2.573-.88 2.573-2.607v-1.535h1.453c1.71 0 2.573-.88 2.573-2.607v-6.74c0-1.021-.207-1.668-.83-2.308L15.953 2.83c-.59-.606-1.287-.83-2.175-.83H10.6c-1.71 0-2.573.88-2.573 2.606v1.536H6.573C4.863 6.142 4 7.014 4 8.75v11.53Zm12.16-8.69L11.588 6.93c-.63-.648-1.154-.789-2.084-.789h-.14v-1.51c0-.822.44-1.296 1.303-1.296h3.668v4.259c0 .963.465 1.42 1.42 1.42h3.885v7.096c0 .83-.449 1.295-1.312 1.295H16.95v-3.61c0-1.063-.124-1.528-.788-2.209Zm-.622-4.192V3.992l3.752 3.819h-3.345c-.29 0-.407-.125-.407-.415ZM5.336 20.253V8.765c0-.813.44-1.286 1.304-1.286h2.722v4.814c0 1.046.532 1.569 1.56 1.569h4.69v6.391c0 .83-.447 1.295-1.302 1.295H6.63c-.855 0-1.295-.464-1.295-1.295Zm5.745-7.645c-.332 0-.465-.132-.465-.464V7.786l4.74 4.822H11.08Z"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_81_3742">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
