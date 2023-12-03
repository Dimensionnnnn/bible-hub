import { useNavigation } from '@react-navigation/native';
import styled, { css } from 'styled-components/native';

import { SvgBackIcon } from '@shared/ui/icons/components/svg-back-icon';

import { ButtonIcon } from '../../../shared/ui/components/buttons/button-icon/button-icon';

interface Props {
  title: string;
}

export const SecondaryHeader = ({ title }: Props) => {
  const nagivate = useNavigation();

  const handleGoBack = () => {
    nagivate.goBack();
  };

  return (
    <StyledHeaderContainer>
      <StyledButtonContainer>
        <ButtonIcon Icon={SvgBackIcon} onPress={handleGoBack} />
      </StyledButtonContainer>
      <StyledHeaderTitle>{title}</StyledHeaderTitle>
    </StyledHeaderContainer>
  );
};

const StyledHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 18px 0 20px 0;
  width: 100%;
  position: relative;
`;

const StyledHeaderTitle = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.headlineSemibold_20};
      color: ${props.theme.colors.grayscale_800};
    `;
  }};
`;

const StyledButtonContainer = styled.View`
  position: absolute;
  width: 100%;
  left: 16px;
  top: 12px;
`;
