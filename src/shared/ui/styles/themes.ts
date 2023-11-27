import { COLORS } from '@shared/ui/styles/colors';

import { EFFECTS } from './effects';
import { styledComponentsTypography } from './styled-components-typography';

export const themes = {
  default: {
    colors: { ...COLORS },
    effects: { ...EFFECTS },
    typography: { ...styledComponentsTypography },
  },
};
