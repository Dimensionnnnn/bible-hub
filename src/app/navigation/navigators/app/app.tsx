import {useAppSelector} from '@shared/store/ducks/hooks/hooks';
import {isUserAuth} from '@shared/store/ducks/selectors/auth-selectors';
import {RootNavigator} from '../root/root';
import {GuestNavigator} from '../guest/guest';

export const AppNavigator = () => {
  const isAuthenticated = useAppSelector(isUserAuth);

  return isAuthenticated ? <RootNavigator /> : <GuestNavigator />;
};
