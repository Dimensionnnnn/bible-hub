import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import { RootRouteNames, RootStackParamList } from '@app/navigation/navigators/root/root';

import { SecondaryHeader } from '@widgets/layouts/secondary-header';

import { InfoModalEntity } from '@entities/modal/info-modal';
import { CommentsEntity } from '@entities/prayer/comments';
import { PrayerInfoEntity } from '@entities/prayer/prayer-info';

import { Prayers } from '@shared/api/generated';
import { CommentFormInput } from '@shared/form-components/inputs/comment-input';
import { useToggle } from '@shared/helpers/hooks/use-toggle';
import { RootState, store, useAppDispatch, useAppSelector } from '@shared/store';
import {
  actions as commentsActions,
  selectors as commentsSelectors,
} from '@shared/store/ducks/comments';
import {
  actions as followedActions,
  selectors as followedSelector,
} from '@shared/store/ducks/followed';
import { actions as prayerActions, selectors as prayerSelector } from '@shared/store/ducks/prayer';
import {
  ButtonSize,
  PrimaryButton,
} from '@shared/ui/components/buttons/primary-button/primary-button';
import { SubscribeButton } from '@shared/ui/components/buttons/subscribe-button/subscribe-button';

export const PrayerPage = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<RouteProp<RootStackParamList, RootRouteNames.PRAYER>>();
  const { prayerId, prayerTitle } = route.params;
  const commentsAfterCursor = useAppSelector(commentsSelectors.selectAfterCursor);
  const prayer = useAppSelector((state) => prayerSelector.selectCurrentPrayer(state));
  const { onCloseToggle, onOpenToggle, isOpened } = useToggle(false);
  const [selfFollowed, setSelfFollowed] = useState<boolean | undefined>(undefined);

  const handleFetchMoreComments = () => {
    if (commentsAfterCursor) {
      dispatch(
        commentsActions.fetchMoreCommentsByPrayerId({ prayerId, afterCursor: commentsAfterCursor }),
      );
    }
  };

  const handleFollow = (prayerId: number) => {
    if (prayer) {
      setSelfFollowed((prevState) => !prevState);
      dispatch(followedActions.fetchFollowPrayer({ prayerId, prayer }));
    }
  };

  const handleUnfollow = (prayerId: number) => {
    setSelfFollowed((prevState) => !prevState);
    dispatch(followedActions.fetchUnfollowPrayer(prayerId));
  };

  const handleDoPrayer = async (prayerId: number) => {
    if (prayer) {
      const columnId = prayer.columnId;
      const doPrayer = await dispatch(prayerActions.fetchPrayerDo({ columnId, prayerId }));

      if (prayerActions.fetchPrayerDo.rejected.match(doPrayer)) {
        onOpenToggle();
      }
    }
  };

  const getFollowedPrayers = () =>
    followedSelector.selectFollowedPrayers(store.getState() as RootState);

  const checkSubscriptionHelper = async (prayerId: number) => {
    let followed = getFollowedPrayers();
    if (followed.length === 0) {
      await dispatch(followedActions.fetchFollowedPrayers());
      followed = getFollowedPrayers();
    }
    return followed.some((prayer: Prayers) => prayer.id === prayerId);
  };

  useEffect(() => {
    const checkSubscription = async () => {
      const resultAction = await checkSubscriptionHelper(prayerId);
      setSelfFollowed(resultAction);
    };

    checkSubscription();
  }, [dispatch, prayerId]);

  return (
    <StyledContainer>
      <SecondaryHeader title={prayerTitle} />
      <StyledScrollView
        onMomentumScrollEnd={handleFetchMoreComments}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <PrayerInfoEntity prayerId={prayerId} />
        <StyledButtonsContainer>
          <PrimaryButton
            size={ButtonSize.large}
            title="Prayed"
            onPress={() => {
              handleDoPrayer(prayerId);
            }}
          />
          <SubscribeButton
            title={'Follow'}
            isFollow={selfFollowed}
            onPress={selfFollowed ? () => handleUnfollow(prayerId) : () => handleFollow(prayerId)}
          />
        </StyledButtonsContainer>
        <CommentsEntity prayerId={prayerId} />
      </StyledScrollView>
      <CommentFormInput prayerId={prayerId} />
      <InfoModalEntity
        isOpened={isOpened}
        title="Sorry!"
        text="The counter can be pressed once per hour."
        onClose={onCloseToggle}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.grayscale_200};
  align-items: center;
  padding-bottom: 20px;
`;

const StyledScrollView = styled.ScrollView`
  width: 100%;
`;

const StyledButtonsContainer = styled.View`
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 24px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.grayscale_500};
`;
