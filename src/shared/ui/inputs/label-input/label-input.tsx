import styled from 'styled-components/native';
import {TextInputProps} from 'react-native';
import {CSSProp} from 'styled-components/native/dist/types';
import {UIDefaultInput} from '../default-input';
import {SvgCheckIcon} from '@shared/ui/icons/components/svg-check-icon';

export interface UILabelInputProps extends TextInputProps {
  label?: string;
  isDisabled?: boolean;
  isSuccess?: boolean;
  errorMessage?: string;
  isError?: boolean;
  rootStyle?: CSSProp;
  ref?: React.Ref<TextInputProps>;
  children?: React.ReactNode;
}

export function UILabelInput({
  label,
  isDisabled,
  isSuccess,
  errorMessage,
  isError,
  rootStyle,
  children,
  ...props
}: UILabelInputProps) {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <UIDefaultInput rootStyle={rootStyle} isDisabled={isDisabled} {...props}>
        {isSuccess && (
          <StyledIconContainer>
            <SvgCheckIcon />
          </StyledIconContainer>
        )}
        {children}
        {isError && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
      </UIDefaultInput>
    </StyledContainer>
  );
}

const StyledLabel = styled.Text`
  ${props => props.theme.typography.headlineSemibold_16};
  color: ${props => props.theme.colors.grayscale_700};
`;

const StyledContainer = styled.View`
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 327px;
`;

const StyledIconContainer = styled.View`
  position: absolute;
  right: 0;
  top: 32px;
`;

const StyledErrorMessage = styled.Text`
  ${props => props.theme.typography.bodyRegular_14};
  color: ${props => props.theme.colors.additional_error};
  padding: 4px 0 4px;
`;
