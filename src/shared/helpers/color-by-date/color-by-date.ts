import { COLORS } from '@shared/ui/styles/colors';

export function getColorByDate(date?: Date): string {
  if (!date) {
    return COLORS.additional_error;
  }

  const currentDate = new Date();
  const diffInHours = Math.abs(currentDate.getTime() - date.getTime()) / 36e5;

  if (diffInHours < 1) {
    return COLORS.indicator_blue;
  }
  if (diffInHours < 24) {
    return COLORS.indicator_yellow;
  }
  return COLORS.indicator_orange;
}
