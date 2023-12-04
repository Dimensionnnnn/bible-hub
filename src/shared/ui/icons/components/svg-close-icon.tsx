import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const SvgCloseIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 18 19" {...props}>
    <Path
      fill="#2A2A2A"
      fillRule="evenodd"
      d="M4.102 4.602c.22-.22.576-.22.796 0L9 8.704l4.102-4.102a.562.562 0 1 1 .796.796L9.796 9.5l4.102 4.102a.562.562 0 1 1-.796.796L9 10.296l-4.102 4.102a.562.562 0 1 1-.796-.796L8.204 9.5 4.102 5.398a.563.563 0 0 1 0-.796Z"
      clipRule="evenodd"
    />
  </Svg>
);
