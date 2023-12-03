import styled from 'styled-components/native';

import { UISkeleton } from '../../skeleton';
import { Props as ComponentProps } from '../card-block';

interface HOCProps {
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const CardBlockHOC =
  (Component: React.ComponentType<ComponentProps>): React.FC<ComponentProps & HOCProps> =>
  ({ isLoading, children, ...props }) => {
    return (
      <StyledContainer>
        {isLoading ? <UISkeleton /> : <Component {...props}>{children}</Component>}
      </StyledContainer>
    );
  };

const StyledContainer = styled.View`
  max-width: 149.5px;
  width: 100%;
  height: 109px;
  border-radius: 28px;
  background-color: ${(props) => props.theme.colors.grayscale_100};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
