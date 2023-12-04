import { useAppSelector } from '@shared/store';
import { selectors } from '@shared/store/ducks/auth';

import { GuestNavigator } from '../guest/guest';
import { RootNavigator } from '../root/root';

export const AppNavigator = () => {
  const isAuthenticated = useAppSelector(selectors.selectUserToken);

  return isAuthenticated ? <RootNavigator /> : <GuestNavigator />;
};
