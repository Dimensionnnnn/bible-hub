import {UISkeleton} from '@shared/ui/skeleton';

interface Props {
  isLoading?: boolean;
  children: React.ReactNode;
}

export const UICardLoadingWrapper: React.FC<Props> = ({
  isLoading,
  children,
}) => {
  if (isLoading) {
    return <UISkeleton />;
  }

  return <>{children}</>;
};
