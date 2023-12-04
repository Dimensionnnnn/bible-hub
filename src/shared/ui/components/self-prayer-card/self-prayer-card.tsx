import { Portal } from '@gorhom/portal';
import { useRef, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { useOnLayout } from '@shared/helpers/hooks/use-on-layout';
import { useToggle } from '@shared/helpers/hooks/use-toggle';

import { UIPrayerCard } from '../prayer-card';

interface Props {
  prayerId: number;
  columnId: number;
  title?: string;
  membersCount?: number;
  completedCount?: number;
  dateOfCompletion?: string;
  isLoading?: boolean;
  onCompletePress: () => void;
  onCardPress: () => void;
}

export const SelfPrayerCard = ({
  prayerId,
  columnId,
  title,
  membersCount,
  completedCount,
  dateOfCompletion,
  isLoading,
  onCompletePress,
  onCardPress,
}: Props) => {
  const { isOpened, onCloseToggle, onOpenToggle } = useToggle();
  const [cardLayout, setCardLayout] = useState({ pageX: 0, pageY: 0 });
  const ref = useRef<View | null>(null);

  const handleLongPress = () => {
    onOpenToggle();
  };

  const onLayout = useOnLayout(ref, setCardLayout);

  return (
    <>
      {isOpened ? (
        <Portal name="card">
          <StyledContainer>
            <StyledWrapper x={cardLayout.pageX} y={cardLayout.pageY}>
              <UIPrayerCard
                prayerId={prayerId}
                columnId={columnId}
                title={title}
                isLoading={isLoading}
                isOpened={isOpened}
                membersCount={membersCount}
                completedCount={completedCount}
                dateOfCompletion={dateOfCompletion}
                onLongPress={handleLongPress}
                onCardPress={onCardPress}
                onCompletePress={onCompletePress}
              />
            </StyledWrapper>
          </StyledContainer>
          <StyledBackdrop onTouchEnd={onCloseToggle} />
        </Portal>
      ) : (
        <UIPrayerCard
          ref={ref}
          prayerId={prayerId}
          columnId={columnId}
          title={title}
          isLoading={isLoading}
          isOpened={isOpened}
          membersCount={membersCount}
          completedCount={completedCount}
          dateOfCompletion={dateOfCompletion}
          onLongPress={handleLongPress}
          onCardPress={onCardPress}
          onCompletePress={() => {}}
          onLayout={onLayout}
        />
      )}
    </>
  );
};

const StyledBackdrop = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(42, 42, 42, 0.8);
  z-index: 1;
`;

const StyledWrapper = styled.View<{ x: number; y: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
`;

const StyledContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
`;
