import { useNetInfo } from '@react-native-community/netinfo';
import { ComponentType, FC, ReactNode } from 'react';

import { NoNetwork } from '@shared/ui/components/list-empty/no-network';

interface WithNoNetworkProps {
  children?: ReactNode;
}

export function withNoNetwork<T>(Component: ComponentType<T>): FC<T & WithNoNetworkProps> {
  const EmptyListComponent: FC<T & WithNoNetworkProps> = ({
    children,
    ...props
  }: T & WithNoNetworkProps) => {
    const netInfo = useNetInfo();
    return netInfo.isConnected ? (
      <Component {...(props as T)}>{children}</Component>
    ) : (
      <NoNetwork />
    );
  };
  EmptyListComponent.displayName = `WithEmptyList(${
    Component.displayName || Component.name || 'Component'
  })`;
  return EmptyListComponent;
}
