import Svg, { G, Path, SvgProps } from 'react-native-svg';

export const SvgPasswordShowedIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 20 20" {...props}>
    <G clipPath="url(#a)">
      <G fill="currentColor" clipPath="url(#b)">
        <Path d="M10.445 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <Path
          fillRule="evenodd"
          d="M1.11 10.59a1.651 1.651 0 0 1 0-1.186A10.003 10.003 0 0 1 10.444 3c4.257 0 7.893 2.66 9.336 6.41a1.65 1.65 0 0 1 0 1.186A10.003 10.003 0 0 1 10.446 17c-4.257 0-7.893-2.66-9.336-6.41ZM14.446 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
