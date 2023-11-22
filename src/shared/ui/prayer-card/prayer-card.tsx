import styled, {css} from 'styled-components/native';
import {CSSProp} from 'styled-components/native/dist/types';
import {UIColorMark} from '../color-mark';
import {
  ButtonIconWithSize,
  ButtonSize,
} from '../buttons/button-icon-with-size/button-icon-with-size';
import {SvgArmsIcon} from '../icons/components/svg-arms-icon';
import {getColorByDate} from '@shared/helpers/color-by-date/color-by-date';
import {UICardLoadingWrapper} from './prayer-card-wrapper';

interface Props {
  title?: string;
  membersCount?: number;
  completedCount?: number;
  dateOfCompletion?: string;
  isLoading?: boolean;
  onCompletePress: () => void;
  onCardPress: () => void;
}

export function UIPrayerCard({
  title,
  membersCount,
  completedCount,
  dateOfCompletion,
  isLoading,
  onCompletePress,
  onCardPress,
}: Props) {
  const date = dateOfCompletion ? new Date(dateOfCompletion) : new Date();
  const markColor = getColorByDate(date);

  const formatCompletedCount =
    completedCount && completedCount > 999
      ? '999+'
      : completedCount?.toString();

  const formatMembersCount =
    membersCount && membersCount > 99 ? '99+' : membersCount?.toString();

  return (
    <StyledPressable onPress={onCardPress}>
      <UICardLoadingWrapper isLoading={isLoading}>
        <>
          <UIColorMark color={markColor} />

          <StyledCardInfoContainer>
            <StyledCardInfoTitle>{title}</StyledCardInfoTitle>

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

const StyledPressable = styled.Pressable<{rootStyle?: CSSProp}>`
  width: 100%;
  max-width: 343px;
  height: 95px;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 20px;

  ${props => `background-color: ${props.theme.colors.grayscale_100}`};

  ${({rootStyle}) => rootStyle};
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
  ${props => {
    return css`
      ${props.theme.typography.headlineMedium_18};
      color: ${props.theme.colors.grayscale_800};
    `;
  }}
`;

const StyledCardInfoDescription = styled.Text`
  ${props => {
    return css`
      ${props.theme.typography.bodyRegular_14};
      color: ${props.theme.colors.grayscale_700};
    `;
  }}
`;

const StyledCardInfoData = styled.Text`
  ${props => {
    return css`
      ${props.theme.typography.bodyBold_14};
      color: ${props.theme.colors.grayscale_800};
    `;
  }}
`;
