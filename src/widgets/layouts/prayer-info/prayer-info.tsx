import styled from 'styled-components/native';

import { UICardBlock } from '@shared/ui/components/card-block';

const backgroundImageUrl = require('@shared/ui/assets/images/background-gradient.png');

enum PrayerInfoTitles {
  DATE = 'Date',
  TOTAL_PRAYERS = 'Total prayers',
  OTHER_PRAYERS = 'Other prayers',
  MY_PRAYERS = 'My prayers',
}

interface Props {
  date?: string;
  totalPrayers?: number;
  otherPrayers?: number;
  myPrayers?: number;
  isLoading?: boolean;
}

export const PrayerInfo = ({ date, totalPrayers, otherPrayers, myPrayers, isLoading }: Props) => {
  return (
    <StyledImageBackground
      source={backgroundImageUrl}
      imageStyle={ImageBackgroundStyles}
      resizeMode="cover"
    >
      <UICardBlock title={PrayerInfoTitles.DATE} content={date} isLoading={isLoading} />
      <UICardBlock
        title={PrayerInfoTitles.TOTAL_PRAYERS}
        content={totalPrayers}
        isLoading={isLoading}
      />
      <UICardBlock
        title={PrayerInfoTitles.OTHER_PRAYERS}
        content={otherPrayers}
        isLoading={isLoading}
      />
      <UICardBlock title={PrayerInfoTitles.MY_PRAYERS} content={myPrayers} isLoading={isLoading} />
    </StyledImageBackground>
  );
};

const StyledImageBackground = styled.ImageBackground`
  width: 343px;
  height: 264px;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 16px;
  padding-left: 16px;
  gap: 12px;
`;

const ImageBackgroundStyles = {
  borderRadius: 24,
};
