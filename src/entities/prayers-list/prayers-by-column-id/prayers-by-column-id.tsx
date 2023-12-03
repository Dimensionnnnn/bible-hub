import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

import { RootRouteNames, RootStackParamList } from '@app/navigation/navigators/root/root';

import { useAppDispatch, useAppSelector } from '@shared/store';
import { actions, selectors } from '@shared/store/ducks/prayers';
import { UIPrayersList } from '@shared/ui/components/prayers-list';

interface Props {
  columnId: number;
}

export const PrayersListEntity = ({ columnId }: Props) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const prayersByColumnId = useAppSelector((state) =>
    selectors.selectPrayersByColumnId(state, columnId),
  );

  const handleNavigate = (id: number, title: string) => {
    navigation.navigate(RootRouteNames.PRAYER, { prayerId: id, prayerTitle: title });
  };

  useEffect(() => {
    if (!prayersByColumnId) {
      dispatch(actions.fetchPrayersByColumnId(columnId));
    }
  }, [dispatch, prayersByColumnId, columnId]);

  return <UIPrayersList data={prayersByColumnId} onPress={handleNavigate} />;
};