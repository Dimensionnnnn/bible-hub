import { DefaultListEmpty } from '../list-empty/default-list-empty';
import { SelfListEmpty } from '../list-empty/self-list-empty';

interface DataHandlerProps {
  data?: any[] | null;
  isSelf?: boolean;
  children: React.ReactNode;
}

export const DataHandler = ({ data, isSelf, children }: DataHandlerProps) => {
  if (!data?.length) {
    return isSelf ? <SelfListEmpty /> : <DefaultListEmpty />;
  }

  return children;
};
