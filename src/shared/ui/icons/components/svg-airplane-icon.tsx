import Svg, { Path, SvgProps } from 'react-native-svg';

export const SvgAirplaneIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M4.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H14.5a.75.75 0 0 1 0 1.5H5.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 4.478 2.404Z"
    />
  </Svg>
);
