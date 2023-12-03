import { ComponentType, FC, ReactNode } from 'react';
import styled from 'styled-components/native';

import { UISkeleton } from '../../ui/components/skeleton';

interface WithLoadingSkeletonProps {
  isLoading?: boolean;
  children?: ReactNode;
}

export function withLoadingSkeleton<T>(
  Component: ComponentType<T>,
): FC<T & WithLoadingSkeletonProps> {
  const LoadingSkeletonComponent: FC<T & WithLoadingSkeletonProps> = ({
    isLoading,
    children,
    ...props
  }: T & WithLoadingSkeletonProps) => {
    return (
      <StyledContainer>
        {isLoading ? <UISkeleton /> : <Component {...(props as T)}>{children}</Component>}
      </StyledContainer>
    );
  };
  LoadingSkeletonComponent.displayName = `WithLoadingSkeleton(${
    Component.displayName || Component.name || 'Component'
  })`;
  return LoadingSkeletonComponent;
}

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
