import { Portal } from '@gorhom/portal';
import { useRef, useState } from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { CSSProp, Interpolation } from 'styled-components/native/dist/types';

import { CardFormInput } from '@shared/form-components/inputs/card-input';
import { useOnLayout } from '@shared/helpers/hooks/use-on-layout';
import { useToggle } from '@shared/helpers/hooks/use-toggle';
import { actions } from '@shared/store/ducks/desk-columns';

import { UISkeleton } from '../skeleton';

interface Props {
  id: number;
  deskId: number;
  title?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onPress?: () => void;
}

export function SelfDeskCard({ id, deskId, title, isLoading, isDisabled, onPress }: Props) {
  const { isOpened, onCloseToggle, onOpenToggle } = useToggle();
  const { isOpened: isPressed, onToggle: onPressToggle, onCloseToggle: onPressClose } = useToggle();
  const [cardLayout, setCardLayout] = useState({ pageX: 0, pageY: 0 });

  const deskState: DeskState | null = isDisabled
    ? DeskState.DISABLED
    : isPressed
    ? DeskState.PRESSED
    : null;

  const textState: DeskState | null = isDisabled ? DeskState.DISABLED : null;

  const cardColors = deskState !== null ? deskCardStyles[deskState] : null;
  const textColors = textState !== null ? deskTextCardStyles[textState] : null;

  const ref = useRef<View | null>(null);

  const handleLongPress = () => {
    onOpenToggle();
    onPressClose();
  };

  const onLayout = useOnLayout(ref, setCardLayout);

  return isOpened ? (
    <Portal name="card">
      <StyledContainer>
        <StyledWrapper x={cardLayout.pageX} y={cardLayout.pageY}>
          <StyledPressable isOpened={isOpened} rootStyle={cardColors}>
            <StyledInputContainer>
              <CardFormInput
                title={title}
                onCloseBackdrop={onCloseToggle}
                dispatchAction={(title: string) =>
                  actions.editColumnTitle({ columnId: id, deskId, title })
                }
              />
            </StyledInputContainer>
          </StyledPressable>
        </StyledWrapper>
        <StyledBackdrop onTouchEnd={onCloseToggle} />
      </StyledContainer>
    </Portal>
  ) : (
    <StyledPressable
      ref={ref}
      onLayout={onLayout}
      isOpened={isOpened}
      rootStyle={cardColors}
      onPress={onPress}
      onPressIn={onPressToggle}
      onPressOut={onPressToggle}
      onLongPress={handleLongPress}
    >
      {isLoading ? <UISkeleton /> : <StyledText rootStyle={textColors}>{title}</StyledText>}
    </StyledPressable>
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

const StyledWrapper = styled.View<{ x: number; y: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
`;

const StyledContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledInputContainer = styled.View`
  padding-left: 25px;
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
