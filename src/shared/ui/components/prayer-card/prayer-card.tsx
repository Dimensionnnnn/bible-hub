import { Ref, forwardRef } from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { CSSProp } from 'styled-components/native/dist/types';

import { CardFormInput } from '@shared/form-components/inputs/card-input';
import { getColorByDate } from '@shared/helpers/color-by-date/color-by-date';
import { actions } from '@shared/store/ducks/prayers';

import { SvgArmsIcon } from '../../icons/components/svg-arms-icon';
import {
  ButtonIconWithSize,
  ButtonSize,
} from '../buttons/button-icon-with-size/button-icon-with-size';
import { UIColorMark } from '../color-mark';
import { UICardLoadingWrapper } from './prayer-card-wrapper';

interface Props {
  prayerId: number;
  columnId: number;
  title?: string;
  membersCount?: number;
  completedCount?: number;
  dateOfCompletion?: string;
  isLoading?: boolean;
  isOpened?: boolean;
  onCompletePress: () => void;
  onCardPress: () => void;
  onLongPress?: () => void;
  onLayout?: () => void;
  ref?: Ref<View>;
}

export const UIPrayerCard = forwardRef<View, Props>(
  (
    {
      prayerId,
      columnId,
      title,
      membersCount,
      completedCount,
      dateOfCompletion,
      isLoading,
      isOpened,
      onCompletePress,
      onCardPress,
      onLongPress,
      onLayout,
    },
    ref,
  ) => {
    const date = dateOfCompletion ? new Date(dateOfCompletion) : new Date();
    const markColor = getColorByDate(date);

    const formatCompletedCount =
      completedCount && completedCount > 999 ? '999+' : completedCount?.toString();

    const formatMembersCount = membersCount && membersCount > 99 ? '99+' : membersCount?.toString();

    return (
      <StyledPressable
        ref={ref}
        onLongPress={onLongPress}
        onPress={onCardPress}
        isOpened={isOpened}
        onLayout={onLayout}
      >
        <UICardLoadingWrapper isLoading={isLoading}>
          <>
            <UIColorMark color={markColor} />

            <StyledCardInfoContainer>
              {isOpened ? (
                <CardFormInput
                  title={title}
                  dispatchAction={(title: string) =>
                    actions.editPrayerTitle({ columnId, prayerId, title })
                  }
                />
              ) : (
                <StyledCardInfoTitle>{title}</StyledCardInfoTitle>
              )}

              <StyledCardInfoWrapper>
                <StyledCardInfoDescriptionWrapper>
                  <StyledCardInfoDescription>Members</StyledCardInfoDescription>
                  <StyledCardInfoData>{formatMembersCount}</StyledCardInfoData>
                </StyledCardInfoDescriptionWrapper>

                <StyledCardInfoDescriptionWrapper>
                  <StyledCardInfoDescription>Completed</StyledCardInfoDescription>
                  <StyledCardInfoData>{formatCompletedCount}</StyledCardInfoData>
                </StyledCardInfoDescriptionWrapper>
              </StyledCardInfoWrapper>
            </StyledCardInfoContainer>

            <ButtonIconWithSize
              size={ButtonSize.small}
              Icon={SvgArmsIcon}
              onPress={onCompletePress}
            />
          </>
        </UICardLoadingWrapper>
      </StyledPressable>
    );
  },
);

export function UIPrayerCard1({
  ref,
  title,
  membersCount,
  completedCount,
  dateOfCompletion,
  isLoading,
  isOpened,
  onCompletePress,
  onCardPress,
  onLongPress,
  onLayout,
}: Props) {
  const date = dateOfCompletion ? new Date(dateOfCompletion) : new Date();
  const markColor = getColorByDate(date);

  const formatCompletedCount =
    completedCount && completedCount > 999 ? '999+' : completedCount?.toString();

  const formatMembersCount = membersCount && membersCount > 99 ? '99+' : membersCount?.toString();

  return (
    <StyledPressable
      ref={ref}
      onLongPress={onLongPress}
      onPress={onCardPress}
      isOpened={isOpened}
      onLayout={onLayout}
    >
      <UICardLoadingWrapper isLoading={isLoading}>
        <>
          <UIColorMark color={markColor} />

          <StyledCardInfoContainer>
            {isOpened ? (
              <StyledCardInfoTitle>{title}</StyledCardInfoTitle>
            ) : (
              <CardFormInput title={title} dispatchAction={() => null} />
            )}

            <StyledCardInfoWrapper>
              <StyledCardInfoDescriptionWrapper>
                <StyledCardInfoDescription>Members</StyledCardInfoDescription>
                <StyledCardInfoData>{formatMembersCount}</StyledCardInfoData>
              </StyledCardInfoDescriptionWrapper>

              <StyledCardInfoDescriptionWrapper>
                <StyledCardInfoDescription>Completed</StyledCardInfoDescription>
                <StyledCardInfoData>{formatCompletedCount}</StyledCardInfoData>
              </StyledCardInfoDescriptionWrapper>
            </StyledCardInfoWrapper>
          </StyledCardInfoContainer>

          <ButtonIconWithSize
            size={ButtonSize.small}
            Icon={SvgArmsIcon}
            onPress={onCompletePress}
          />
        </>
      </UICardLoadingWrapper>
    </StyledPressable>
  );
}

const StyledPressable = styled.Pressable<{ rootStyle?: CSSProp; isOpened?: boolean }>`
  width: 100%;
  max-width: 343px;
  height: 95px;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 20px;

  z-index: ${({ isOpened }) => (isOpened ? 10 : 0)};

  ${(props) => `background-color: ${props.theme.colors.grayscale_100}`};

  ${({ rootStyle }) => rootStyle};
`;

const StyledCardInfoContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

const StyledCardInfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const StyledCardInfoDescriptionWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const StyledCardInfoTitle = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.headlineMedium_18};
      color: ${props.theme.colors.grayscale_800};
    `;
  }}
`;

const StyledCardInfoDescription = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.bodyRegular_14};
      color: ${props.theme.colors.grayscale_700};
    `;
  }}
`;

const StyledCardInfoData = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.bodyBold_14};
      color: ${props.theme.colors.grayscale_800};
    `;
  }}
`;
