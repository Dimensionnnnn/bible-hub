import { View } from 'react-native';

export function useOnLayout(
  ref: React.RefObject<View>,
  setCardLayout: (layout: { pageX: number; pageY: number }) => void,
) {
  return () => {
    ref.current?.measure((_, __, ___, ____, pageX, pageY) => {
      setCardLayout({ pageX, pageY });
    });
  };
}
