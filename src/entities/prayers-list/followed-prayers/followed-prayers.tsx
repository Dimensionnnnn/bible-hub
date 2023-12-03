import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

import { RootRouteNames, RootStackParamList } from '@app/navigation/navigators/root/root';

import { useAppDispatch, useAppSelector } from '@shared/store';
import { actions, selectors } from '@shared/store/ducks/followed';
import { UIPrayersList } from '@shared/ui/components/prayers-list';

export const FollowedPrayersListEntity = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const followedPrayers = useAppSelector(selectors.selectFollowedPrayers);

  const handleNavigate = (id: number, title: string) => {
    navigation.navigate(RootRouteNames.PRAYER, { prayerId: id, prayerTitle: title });
  };

  useEffect(() => {
    dispatch(actions.fetchFollowedPrayers());
  }, [dispatch]);

  return <UIPrayersList data={followedPrayers} onPress={handleNavigate} />;
};
