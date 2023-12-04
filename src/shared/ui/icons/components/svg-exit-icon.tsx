import Svg, { Path, SvgProps } from 'react-native-svg';

export const SvgExitIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 18 18" {...props}>
    <Path
      fill="currentColor"
      d="M12.39 14.5V9.562H7.292a.563.563 0 1 1 0-1.125h5.098V3.391a1.971 1.971 0 0 0-1.969-1.97H5.97A1.97 1.97 0 0 0 4 3.392V14.5a1.97 1.97 0 0 0 1.969 1.969h4.452A1.971 1.971 0 0 0 12.39 14.5Zm3.142-4.938-1.852 1.852a.563.563 0 0 0 .795.796l2.813-2.813a.563.563 0 0 0 0-.795l-2.813-2.813a.562.562 0 0 0-.795.796l1.852 1.852H12.39v1.125h3.142Z"
    />
  </Svg>
);
