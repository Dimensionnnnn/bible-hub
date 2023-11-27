import { UISkeleton } from '@shared/ui/components/skeleton';

interface Props {
  isLoading?: boolean;
  children: React.ReactNode;
}

export const UICardLoadingWrapper: React.FC<Props> = ({ isLoading, children }) => {
  if (isLoading) {
    return <UISkeleton />;
  }

  return children;
};
