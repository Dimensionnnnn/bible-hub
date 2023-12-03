import { RouteProp, useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';

import { RootRouteNames, RootStackParamList } from '@app/navigation/navigators/root/root';

import { SecondaryHeader } from '@widgets/layouts/secondary-header';

import { CommentsEntity } from '@entities/prayer/comments';
import { PrayerInfoEntity } from '@entities/prayer/prayer-info';

import { CommentFormInput } from '@shared/form-components/inputs/comment-input';
import { useAppDispatch, useAppSelector } from '@shared/store';
import {
  actions as commentsActions,
  selectors as commentsSelectors,
} from '@shared/store/ducks/comments';
import { actions } from '@shared/store/ducks/followed';
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

  const handleFetchMoreComments = () => {
    dispatch(
      commentsActions.fetchMoreCommentsByPrayerId({ prayerId, afterCursor: commentsAfterCursor }),
    );
  };

  const handleFollow = (prayerId: number) => {
    if (prayer) {
      dispatch(actions.fetchFollowPrayer({ prayerId, prayer }));
    }
  };

  const handleUnfollow = (prayerId: number) => {
    dispatch(actions.fetchUnfollowPrayer(prayerId));
  };

  const handleDoPrayer = (prayerId: number) => {
    if (prayer) {
      const columnId = prayer.columnId;
      dispatch(prayerActions.fetchPrayerDo({ columnId, prayerId }));
    }
  };

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
          <SubscribeButton title={'Follow'} onPress={() => handleFollow(prayerId)} />
        </StyledButtonsContainer>
        <CommentsEntity prayerId={prayerId} />
      </StyledScrollView>
      <CommentFormInput prayerId={prayerId} />
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