import dayjs from 'dayjs';
import { useEffect } from 'react';

import { PrayerInfo } from '@widgets/layouts/prayer-info/prayer-info';

import { useAppDispatch, useAppSelector } from '@shared/store';
import { actions, selectors } from '@shared/store/ducks/prayer';

interface Props {
  prayerId: number;
}

export const PrayerInfoEntity = ({ prayerId }: Props) => {
  const dispatch = useAppDispatch();
  const prayer = useAppSelector(selectors.selectCurrentPrayer);
  const isLoading = useAppSelector(selectors.selectLoading);

  useEffect(() => {
    dispatch(actions.fetchPrayerById(prayerId));
  }, [prayerId, dispatch]);

  return (
    <PrayerInfo
      isLoading={isLoading}
      date={dayjs(prayer.createdAt).format('DD.MM.YYYY')}
      totalPrayers={prayer.completesCount}
      otherPrayers={prayer.otherPrayCount}
      myPrayers={prayer.myPrayCount}
    />
  );
};
