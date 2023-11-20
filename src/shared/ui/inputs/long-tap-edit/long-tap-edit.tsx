import React, {useState} from 'react';
import {CSSProp} from 'styled-components/native/dist/types';
import styled, {css} from 'styled-components/native';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native';
import UISkeleton from '@shared/ui/skeleton';

interface Props extends TextInputProps {
  isDisabled?: boolean;
  isLoading?: boolean;
  rootPressableStyle?: CSSProp;
  rootTextStyle?: CSSProp;
  ref?: React.Ref<HTMLInputElement>;
}

export function UILongTapEdit({isDisabled, isLoading, ...props}: Props) {
  const [isLongPressed, setIsLongPressed] = useState(false);

  const handleLongPress = () => {
    setIsLongPressed(true);
  };

  const handleBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsLongPressed(false);
    props.onBlur && props.onBlur(event);
  };

  return (
    <StyledPressable onLongPress={handleLongPress}>
      {isLoading ? (
        <UISkeleton />
      ) : (
        <>
          {isLongPressed && !isDisabled ? (
            <StyledInput {...props} onBlur={handleBlur} />
          ) : (
            <StyledText>
              {props.value ? props.value : props.placeholder}
            </StyledText>
          )}
        </>
      )}
    </StyledPressable>
  );
}

const textStyles = css`
  width: 100%;
  padding: 0 16px;

  ${props => {
    return css`
      ${props.theme.typography.headlineSemibold_20};
      color: ${props.theme.colors.grayscale_800};
    `;
  }}
`;

const StyledPressable = styled.Pressable<{rootPressableStyle?: CSSProp}>`
  width: 100%;
  height: 44px;
  max-width: 193px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;

  ${props => {
    return css`
      background-color: ${props.theme.colors.grayscale_100};
    `;
  }}

  ${({rootPressableStyle}) => rootPressableStyle};
`;

const StyledInput = styled.TextInput<{
  rootTextStyle?: CSSProp;
}>`
  ${textStyles}
  ${({rootTextStyle}) => rootTextStyle};
`;

const StyledText = styled.Text<{
  rootTextStyle?: CSSProp;
}>`
  ${textStyles}
  ${({rootTextStyle}) => rootTextStyle};
`;
