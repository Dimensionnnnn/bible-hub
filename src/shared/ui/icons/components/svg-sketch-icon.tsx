import * as React from 'react';
import Svg, { G, Path, SvgProps } from 'react-native-svg';

export const SvgSketchIcon = (props: SvgProps) => (
  <Svg width={177} height={177} fill="none" viewBox="0 0 178 177" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#F2F2F2"
        fillRule="evenodd"
        d="M89 177c48.877 0 88.5-39.623 88.5-88.5S137.877 0 89 0C67.071 0 58.736 26.302 43.275 39.51 24.275 55.743.5 61.553.5 88.5.5 137.377 40.123 177 89 177Z"
        clipRule="evenodd"
      />
      <G filter="url(#b)">
        <Path
          fill="#EBEBEB"
          d="M142.1 57.525H65.4c-2.444 0-4.425 1.694-4.425 3.784v79.457c0 2.09 1.981 3.784 4.425 3.784h76.7c2.444 0 4.425-1.694 4.425-3.784V61.309c0-2.09-1.981-3.784-4.425-3.784Z"
        />
      </G>
      <Path
        fill="#fff"
        d="M52.125 59c0-6.517 5.283-11.8 11.8-11.8h56.05c6.517 0 11.8 5.283 11.8 11.8v63.425c0 6.517-5.283 11.8-11.8 11.8h-56.05c-6.517 0-11.8-5.283-11.8-11.8V59Z"
      />
      <Path
        fill="#696969"
        fillRule="evenodd"
        d="M138.834 64.63a4.425 4.425 0 0 1 .183 6.256l-37.948 40.23a4.425 4.425 0 0 1-6.438-6.073l37.948-40.23a4.425 4.425 0 0 1 6.255-.182Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
