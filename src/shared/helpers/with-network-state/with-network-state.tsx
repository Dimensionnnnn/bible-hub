import { useNetInfo } from '@react-native-community/netinfo';
import { ComponentType, FC, ReactNode } from 'react';

import { NoNetwork } from '@shared/ui/components/list-empty/no-network';

interface WithNetworkStateProps {
  children?: ReactNode;
}

export function withNetworkState<T>(Component: ComponentType<T>): FC<T & WithNetworkStateProps> {
  const NetworkStateComponent: FC<T & WithNetworkStateProps> = ({
    children,
    ...props
  }: T & WithNetworkStateProps) => {
    const netInfo = useNetInfo();
    return netInfo.isConnected && netInfo.isInternetReachable ? (
      <Component {...(props as T)}>{children}</Component>
    ) : (
      <NoNetwork />
    );
  };
  NetworkStateComponent.displayName = `WithNetworkState(${
    Component.displayName || Component.name || 'Component'
  })`;
  return NetworkStateComponent;
}
