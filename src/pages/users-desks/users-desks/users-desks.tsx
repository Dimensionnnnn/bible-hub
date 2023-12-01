import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import styled from 'styled-components/native';

import { RootRouteNames, RootStackParamList } from '@app/navigation/navigators/root/root';

import { PrimaryHeader } from '@widgets/layouts/primary-header';

import { useAppDispatch, useAppSelector } from '@shared/store';
import { actions as authActions } from '@shared/store/ducks/auth';
import { selectors, actions as usersDesksActions } from '@shared/store/ducks/users-desks';
import { UIDesksList } from '@shared/ui/components/desks-list';

export const UsersDeskPage = () => {
  const dispatch = useAppDispatch();
  const afterCursor = useAppSelector(selectors.selectAfterCursor);
  const usersDesks = useAppSelector(selectors.selectUsersDesks);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  const handleNavigate = (id: number, title: string) => {
    navigation.navigate(RootRouteNames.DESK_COLUMNS, { deskId: id, deskTitle: title });
  };

  const handleMoreUsersDesks = useCallback(
    (cursor?: string) => {
      if (cursor) {
        dispatch(usersDesksActions.fetchMoreUsersDesks({ afterCursor: cursor }));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(usersDesksActions.fetchUsersDesks());
  }, [dispatch]);

  return (
    <StyledContainer>
      <PrimaryHeader title="Users desks" onLogout={handleLogout} />
      <StyledContentContainer>
        <UIDesksList
          data={usersDesks}
          onPress={handleNavigate}
          fetchMore={() => handleMoreUsersDesks(afterCursor)}
        />
      </StyledContentContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.grayscale_200};
  position: relative;
`;

const StyledContentContainer = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 16px 0 14px;
`;
