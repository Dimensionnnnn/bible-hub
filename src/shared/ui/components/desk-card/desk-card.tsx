import { useState } from 'react';
import styled, { css } from 'styled-components/native';
import { CSSProp, Interpolation } from 'styled-components/native/dist/types';

import { useToggle } from '@shared/helpers/hooks/use-toggle';

import { UISkeleton } from '../skeleton';

interface Props {
  title?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onPress?: () => void;
}

export function UIDeskCard({ title, isLoading, isDisabled, onPress }: Props) {
  const { isOpened, onCloseToggle, onOpenToggle } = useToggle();
  const [isPressed, setIsPressed] = useState(false);

  const deskState: DeskState | null = isDisabled
    ? DeskState.DISABLED
    : isPressed
    ? DeskState.PRESSED
    : null;

  const textState: DeskState | null = isDisabled ? DeskState.DISABLED : null;

  const cardColors = deskState !== null ? deskCardStyles[deskState] : null;
  const textColors = textState !== null ? deskTextCardStyles[textState] : null;

  const handlePress = () => {
    setIsPressed((prevPressed) => !prevPressed);
  };

  return (
    <>
      <StyledPressable
        isOpened={isOpened}
        rootStyle={cardColors}
        onPress={onPress}
        onPressIn={handlePress}
        onPressOut={handlePress}
        onLongPress={onOpenToggle}
      >
        {isLoading ? <UISkeleton /> : <StyledText rootStyle={textColors}>{title}</StyledText>}
      </StyledPressable>
      {isOpened && <StyledBackdrop onTouchEnd={onCloseToggle} />}
    </>
  );
}

enum DeskState {
  DISABLED = 'isDisabled',
  PRESSED = 'isPressed',
}

const deskCardStyles = {
  [DeskState.DISABLED]: css`
    background-color: ${(props) => props.theme.colors.grayscale_100};
  `,
  [DeskState.PRESSED]: css`
    background-color: ${(props) => props.theme.colors.grayscale_300};
  `,
} as Readonly<Record<DeskState, Interpolation<typeof DeskState>>>;

const deskTextCardStyles = {
  [DeskState.DISABLED]: css`
    color: ${(props) => props.theme.colors.grayscale_400};
  `,
} as Readonly<Record<DeskState, Interpolation<typeof DeskState>>>;

const StyledBackdrop = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(42, 42, 42, 0.8);
  z-index: 1;
`;

const StyledPressable = styled.Pressable<{ rootStyle?: CSSProp; isOpened?: boolean }>`
  width: 100%;
  max-width: 311px;
  height: 76px;
  border-radius: 24px;
  justify-content: center;
  align-items: start;
  z-index: ${(props) => (props.isOpened ? 10 : 0)};

  ${(props) => `background-color: ${props.theme.colors.grayscale_100}`};

  ${({ rootStyle }) => rootStyle};
`;

const StyledText = styled.Text<{ rootStyle?: CSSProp }>`
  padding: 24px;

  ${(props) => {
    return css`
      ${props.theme.typography.headlineSemibold_20};
      color: ${props.theme.colors.grayscale_800};
    `;
  }}

  ${({ rootStyle }) => rootStyle};
`;
