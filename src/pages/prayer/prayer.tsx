import { RouteProp, useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import styled from 'styled-components/native';

import { RootRouteNames, RootStackParamList } from '@app/navigation/navigators/root/root';

import { PrayerInfo } from '@widgets/layouts/prayer-info/prayer-info';
import { SecondaryHeader } from '@widgets/layouts/secondary-header';

import { CommentFormInput } from '@shared/form-components/inputs/comment-input';
import { useAppDispatch, useAppSelector } from '@shared/store';
import {
  actions as commentsActions,
  selectors as commentsSelectors,
} from '@shared/store/ducks/comments';
import { actions as prayerActions, selectors as prayerSelectors } from '@shared/store/ducks/prayer';
import {
  ButtonSize,
  PrimaryButton,
} from '@shared/ui/components/buttons/primary-button/primary-button';
import { SubscribeButton } from '@shared/ui/components/buttons/subscribe-button/subscribe-button';
import { UICommentsList } from '@shared/ui/components/comments-list';

export const PrayerPage = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<RouteProp<RootStackParamList, RootRouteNames.PRAYER>>();
  const { prayerId, prayerTitle } = route.params;

  const prayer = useAppSelector(prayerSelectors.selectCurrentPrayer);
  const isLoading = useAppSelector(prayerSelectors.selectLoading);

  const comments = useAppSelector((state) => commentsSelectors.selectComments(state, prayerId));
  const commentsAfterCursor = useAppSelector(commentsSelectors.selectAfterCursor);

  const handleFetchMoreComments = () => {
    dispatch(
      commentsActions.fetchMoreCommentsByPrayerId({ prayerId, afterCursor: commentsAfterCursor }),
    );
  };

  useEffect(() => {
    dispatch(prayerActions.fetchPrayerById(prayerId));
  }, [prayerId, dispatch]);

  useEffect(() => {
    dispatch(commentsActions.fetchCommentsByPrayerId(prayerId));
  }, [prayerId, dispatch]);

  return (
    <StyledContainer>
      <SecondaryHeader title={prayerTitle} />
      <StyledScrollView
        onMomentumScrollEnd={handleFetchMoreComments}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <PrayerInfo
          isLoading={isLoading}
          date={dayjs(prayer.createdAt).format('DD.MM.YYYY')}
          totalPrayers={prayer.completesCount}
          otherPrayers={prayer.otherPrayCount}
          myPrayers={prayer.myPrayCount}
        />
        <StyledButtonsContainer>
          <PrimaryButton size={ButtonSize.large} title="Prayed" onPress={() => {}} />
          <SubscribeButton title={'Follow'} onPress={() => {}} />
        </StyledButtonsContainer>
        <UICommentsList data={comments} />
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
