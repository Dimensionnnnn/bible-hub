import React, {useState} from 'react';
import styled, {css} from 'styled-components/native';
import {TextInputProps} from 'react-native';
import {CSSProp} from 'styled-components/native/dist/types';
import {
  ButtonIconWithSize,
  ButtonSize,
} from '@shared/ui/buttons/button-icon-with-size/button-icon-with-size';
import {SvgAirplaneIcon} from '@shared/ui/icons/components/svg-airplane-icon';

interface UICommentInputProps extends TextInputProps {
  isDisabled?: boolean;
  rootStyle?: CSSProp;
  onPress: () => void;
}

function UICommentInput({
  isDisabled,
  onPress,
  rootStyle,
  ...props
}: UICommentInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsFilled(!!props.value);
  };

  const handleChangeText = (text: string) => {
    setIsFilled(!!text);
  };

  console.log(isDisabled);

  return (
    <StyledContainer>
      <StyledInput
        rootStyle={rootStyle}
        isFocused={isFocused}
        isFilled={isFilled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChangeText}
        editable={!isDisabled}
        {...props}
      />
      {!isDisabled && isFilled && (
        <ButtonIconWithSize
          size={ButtonSize.medium}
          Icon={SvgAirplaneIcon}
          onPress={onPress}
        />
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled.View<{isDisabled?: boolean}>`
  width: 100%;
  max-width: 343px;
  height: 56px;
  border-radius: 16px;
  padding: 4px 4px 4px 12px;
  gap: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${props => {
    if (props.isDisabled) {
      return css`
        background-color: ${props.theme.default.colors.grayscale_200};
      `;
    }
    return css`
      background-color: ${props.theme.default.colors.grayscale_300};
    `;
  }}
`;

const StyledInput = styled.TextInput<{
  isFocused?: boolean;
  isFilled?: boolean;
  isDisabled?: boolean;
  rootStyle?: CSSProp;
}>`
  ${props => props.theme.default.typography.bodyRegular_16};

  ${props => {
    if (props.isDisabled) {
      return css`
        color: ${props.theme.default.colors.grayscale_400};
      `;
    }

    if (props.isFocused || props.isFilled) {
      return css`
        color: ${props.theme.default.colors.grayscale_800};
      `;
    }

    return css`
      color: ${props.theme.default.colors.grayscale_600};
    `;
  }}

  padding: 10px;
  width: 100%;
  flex: 1;

  ${({rootStyle}) => rootStyle};
`;

export default UICommentInput;
