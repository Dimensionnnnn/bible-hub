import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

export const SvgSpinnerIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 23 22" {...props}>
    <Circle
      cx={11.5}
      cy={11}
      r={8.25}
      stroke={props.stroke || '#CFCFCF'}
      strokeWidth={2}
      opacity={0.5}
    />
    <Path stroke="currentColor" strokeWidth={2} d="M11.5 19.25A8.25 8.25 0 0 1 3.25 11" />
  </Svg>
);
