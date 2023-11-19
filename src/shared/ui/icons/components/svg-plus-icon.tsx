import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const SvgPlusIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 25 25" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.5 4.25a.75.75 0 0 1 .75.75v6.75H20a.75.75 0 0 1 0 1.5h-6.75V20a.75.75 0 0 1-1.5 0v-6.75H5a.75.75 0 0 1 0-1.5h6.75V5a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </Svg>
);
