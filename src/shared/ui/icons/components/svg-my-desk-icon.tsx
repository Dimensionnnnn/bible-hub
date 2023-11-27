import Svg, { Path, SvgProps } from 'react-native-svg';

export const SvgMyDeskIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 25 24" {...props}>
    <Path
      fill="currentColor"
      d="M14.792 2a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6Z"
    />
  </Svg>
);
