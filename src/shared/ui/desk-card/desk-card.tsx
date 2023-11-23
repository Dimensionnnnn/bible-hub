import {useState} from 'react';
import styled, {css} from 'styled-components/native';
import {CSSProp, Interpolation} from 'styled-components/native/dist/types';
import {UISkeleton} from '../skeleton';

interface Props {
  title?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  rootStyle?: CSSProp;
  onPress?: () => void;
}

export function UIDeskCard({title, isLoading, isDisabled, onPress}: Props) {
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
    setIsPressed(prevPressed => !prevPressed);
  };

  return (
    <StyledPressable
      rootStyle={cardColors}
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}>
      {isLoading ? (
        <UISkeleton />
      ) : (
        <StyledText rootStyle={textColors}>{title}</StyledText>
      )}
    </StyledPressable>
  );
}

enum DeskState {
  DISABLED = 'isDisabled',
  PRESSED = 'isPressed',
}

const deskCardStyles = {
  [DeskState.DISABLED]: css`
    background-color: ${props => props.theme.colors.grayscale_100};
  `,
  [DeskState.PRESSED]: css`
    background-color: ${props => props.theme.colors.grayscale_300};
  `,
} as Readonly<Record<DeskState, Interpolation<typeof DeskState>>>;

const deskTextCardStyles = {
  [DeskState.DISABLED]: css`
    color: ${props => props.theme.colors.grayscale_400};
  `,
} as Readonly<Record<DeskState, Interpolation<typeof DeskState>>>;

const StyledPressable = styled.Pressable<{rootStyle?: CSSProp}>`
  width: 100%;
  max-width: 311px;
  height: 76px;
  border-radius: 24px;
  justify-content: center;
  align-items: start;

  ${props => `background-color: ${props.theme.colors.grayscale_100}`};

  ${({rootStyle}) => rootStyle};
`;

const StyledText = styled.Text<{rootStyle?: CSSProp}>`
  padding: 24px;

  ${props => {
    return css`
      ${props.theme.typography.headlineSemibold_20};
      color: ${props.theme.colors.grayscale_800};
    `;
  }}

  ${({rootStyle}) => rootStyle};
`;
