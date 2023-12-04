import { DefaultListEmpty } from '../list-empty/default-list-empty';

interface DataHandlerProps {
  data?: any[] | null;
  children: React.ReactNode;
}

export const DataHandler = ({ data, children }: DataHandlerProps) => {
  if (!data?.length) {
    return <DefaultListEmpty />;
  }

  return children;
};
