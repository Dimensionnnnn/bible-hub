import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import styled, { css } from 'styled-components/native';

import {
  ButtonIconWithSize,
  ButtonSize,
} from '@shared/ui/components/buttons/button-icon-with-size/button-icon-with-size';
import { SvgAirplaneIcon } from '@shared/ui/icons/components/svg-airplane-icon';

interface UICommentInputProps extends TextInputProps {
  fieldState: ControllerFieldState;
  field: ControllerRenderProps<any, any>;
  isDisabled?: boolean;
  onSubmitButtonPress: () => void;
}

export function UICommentInput({
  fieldState,
  field,
  isDisabled,
  onSubmitButtonPress,
  ...props
}: UICommentInputProps) {
  const { value, onChange, onBlur } = field;
  const { isDirty } = fieldState;

  const containerState: InputState = isDisabled ? InputState.DISABLED : InputState.DEFAULT;

  const inputState: InputState = isDirty
    ? InputState.DIRTY
    : isDisabled
    ? InputState.DIRTY
    : InputState.DEFAULT;

  const containerColors = containerStyles[containerState];
  const inputColors = inputStyles[inputState];

  return (
    <StyledContainer rootStyle={containerColors}>
      <StyledInput
        rootStyle={inputColors}
        editable={!isDisabled}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        {...props}
      />
      {!isDisabled && isDirty && (
        <ButtonIconWithSize
          size={ButtonSize.medium}
          Icon={SvgAirplaneIcon}
          onPress={onSubmitButtonPress}
        />
      )}
    </StyledContainer>
  );
}

enum InputState {
  DISABLED = 'isDisabled',
  DIRTY = 'isDirty',
  DEFAULT = 'isDefault',
}

const containerStyles = {
  [InputState.DISABLED]: css`
    background-color: ${(props) => props.theme.colors.grayscale_200};
  `,
  [InputState.DEFAULT]: css`
    background-color: ${(props) => props.theme.colors.grayscale_300};
  `,
};

const inputStyles = {
  [InputState.DISABLED]: css`
    color: ${(props) => props.theme.colors.grayscale_400};
  `,
  [InputState.DIRTY]: css`
    color: ${(props) => props.theme.colors.grayscale_800};
  `,
  [InputState.DEFAULT]: css`
    color: ${(props) => props.theme.colors.grayscale_600};
  `,
};

const StyledContainer = styled.View`
  width: 100%;
  max-width: 343px;
  height: 56px;
  border-radius: 16px;
  padding: 4px 4px 4px 12px;
  gap: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledInput = styled.TextInput`
  ${(props) => props.theme.typography.bodyRegular_16};

  padding: 10px;
  width: 100%;
  flex: 1;
`;
