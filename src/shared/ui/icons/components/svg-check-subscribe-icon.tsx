import Svg, { Path, SvgProps } from 'react-native-svg';
export const SvgCheckSubscribeIcon = (props: SvgProps) => (
  <Svg width={props.width || 24} height={props.height || 24} fill="none" viewBox="0 0 17 16" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M14.464 3.123a.6.6 0 0 1 .113.84l-6.4 8.4a.6.6 0 0 1-.901.061l-3.6-3.6a.6.6 0 1 1 .848-.848L7.64 11.09l5.984-7.854a.6.6 0 0 1 .84-.113Z"
      clipRule="evenodd"
    />
  </Svg>
);
