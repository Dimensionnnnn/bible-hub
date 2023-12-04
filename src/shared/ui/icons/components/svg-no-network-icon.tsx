import * as React from 'react';
import Svg, { G, Path, SvgProps } from 'react-native-svg';

export const SvgNoNetworkIcon = (props: SvgProps) => (
  <Svg width={177} height={177} fill="none" viewBox="0 0 178 177" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#F2F2F2"
        fillRule="evenodd"
        d="M89.5 178c49.706 0 90-40.294 90-90s-40.294-90-90-90C67.2-2 58.723 24.748 43 38.18 23.678 54.688-.5 60.595-.5 88c0 49.706 40.294 90 90 90Z"
        clipRule="evenodd"
      />
      <G filter="url(#b)">
        <Path
          fill="#EBEBEB"
          fillRule="evenodd"
          d="M91 163c34.794 0 63-28.206 63-63s-28.206-63-63-63c-15.61 0-21.544 18.723-32.55 28.126C44.925 76.681 28 80.816 28 100c0 34.794 28.206 63 63 63Z"
          clipRule="evenodd"
        />
      </G>
      <Path
        fill="#fff"
        d="M91 145c28.995 0 52.5-23.505 52.5-52.5S119.995 40 91 40 38.5 63.505 38.5 92.5 62.005 145 91 145Z"
      />
      <Path
        fill="#696969"
        fillRule="evenodd"
        d="M82.107 81.303a4.5 4.5 0 0 1-4.5 4.5H64a4.5 4.5 0 0 1 0-9h13.607a4.5 4.5 0 0 1 4.5 4.5ZM121.107 81.303a4.5 4.5 0 0 1-4.5 4.5H103a4.5 4.5 0 0 1 0-9h13.607a4.5 4.5 0 0 1 4.5 4.5ZM104.445 112.293a4.5 4.5 0 0 1-6.238 1.259l-7.966-5.29-7.814 5.272a4.5 4.5 0 0 1-5.033-7.461l10.311-6.956a4.5 4.5 0 0 1 5.006-.018l10.475 6.956a4.5 4.5 0 0 1 1.259 6.238Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
