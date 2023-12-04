import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';

import { RootRouteNames, RootStackParamList } from '@app/navigation/navigators/root/root';

import { useAppDispatch, useAppSelector } from '@shared/store';
import {
  actions as columnsActions,
  selectors as columnsSelectors,
} from '@shared/store/ducks/desk-columns';
import { UISelfDeskColumnsList } from '@shared/ui/components/self-desks-columns-list';

interface Props {
  deskId: number;
}

export const SelfColumnsEntity = ({ deskId }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const afterCursor = useAppSelector(columnsSelectors.selectAfterCursor);
  const selfColumns = useAppSelector((state) => {
    return columnsSelectors.selectDeskColumns(state, deskId);
  });

  const handleNavigate = (id: number, title: string) => {
    navigation.navigate(RootRouteNames.SELF_PRAYERS, { columnId: id, columnTitle: title });
  };

  const handleMoreDeskColumns = useCallback(
    (cursor?: string) => {
      if (cursor) {
        dispatch(columnsActions.fetchMoreDeskColumns({ deskId, afterCursor: cursor }));
      }
    },
    [deskId, dispatch],
  );

  const handleDelete = (columnId: number) => {
    dispatch(columnsActions.fetchDeleteColumn({ columnId, deskId }));
  };

  useEffect(() => {
    dispatch(columnsActions.fetchDeskColumns(deskId));
  }, [deskId, dispatch]);

  return (
    <UISelfDeskColumnsList
      deskId={deskId}
      data={selfColumns}
      onPress={handleNavigate}
      fetchMore={() => {
        handleMoreDeskColumns(afterCursor);
      }}
      onDeleteAction={handleDelete}
    />
  );
};
