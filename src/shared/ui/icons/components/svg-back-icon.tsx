import Svg, { Path, SvgProps } from 'react-native-svg';

export const SvgBackIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 18 18" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M8.273 2.977c.22.22.22.576 0 .796L3.608 8.437H15.75a.562.562 0 1 1 0 1.126H3.608l4.665 4.664a.562.562 0 1 1-.796.796L1.852 9.398a.563.563 0 0 1 0-.796l5.625-5.625c.22-.22.576-.22.796 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
