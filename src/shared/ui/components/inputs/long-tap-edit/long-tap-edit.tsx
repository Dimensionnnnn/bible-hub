import { NativeSyntheticEvent, TextInputFocusEventData, TextInputProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import { CSSProp } from 'styled-components/native/dist/types';

import { useToggle } from '@shared/helpers/hooks/use-toggle';
import { UISkeleton } from '@shared/ui/components/skeleton';

interface Props extends TextInputProps {
  isDisabled?: boolean;
  isLoading?: boolean;
  rootPressableStyle?: CSSProp;
  rootTextStyle?: CSSProp;
  ref?: React.Ref<TextInputProps>;
}

export function UILongTapEdit({ isDisabled, isLoading, ...props }: Props) {
  const { isOpened: isLongPressed, onToggle: setIsLongPressed } = useToggle();

  const handleLongPress = () => {
    setIsLongPressed();
  };

  const handleBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsLongPressed();
    if (props.onBlur) {
      props.onBlur(event);
    }
  };

  return (
    <StyledPressable onLongPress={handleLongPress}>
      {isLoading ? (
        <UISkeleton />
      ) : isLongPressed && !isDisabled ? (
        <StyledInput {...props} onBlur={handleBlur} />
      ) : (
        <StyledText>{props.value ? props.value : props.placeholder}</StyledText>
      )}
    </StyledPressable>
  );
}

const textStyles = css`
  width: 100%;
  padding: 0 16px;

  ${(props) => {
    return css`
      ${props.theme.typography.headlineSemibold_20};
      color: ${props.theme.colors.grayscale_800};
    `;
  }}
`;

const StyledPressable = styled.Pressable<{ rootPressableStyle?: CSSProp }>`
  width: 100%;
  height: 44px;
  max-width: 193px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;

  ${(props) => {
    return css`
      background-color: ${props.theme.colors.grayscale_100};
    `;
  }}

  ${({ rootPressableStyle }) => rootPressableStyle};
`;

const StyledInput = styled.TextInput<{
  rootTextStyle?: CSSProp;
}>`
  ${textStyles}
  ${({ rootTextStyle }) => rootTextStyle};
`;

const StyledText = styled.Text<{
  rootTextStyle?: CSSProp;
}>`
  ${textStyles}
  ${({ rootTextStyle }) => rootTextStyle};
`;
