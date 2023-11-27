import { useCallback, useState } from 'react';

interface UseToggleResult {
  isOpened: boolean;
  onOpenToggle: () => void;
  onCloseToggle: () => void;
  onToggle: () => void;
}

export function useToggle(initialState = false): UseToggleResult {
  const [isOpened, setIsOpened] = useState<boolean>(() => initialState);

  const onToggle = useCallback(() => setIsOpened((state) => !state), []);
  const onCloseToggle = useCallback(() => setIsOpened(false), []);
  const onOpenToggle = useCallback(() => setIsOpened(true), []);

  return {
    isOpened,
    onToggle,
    onCloseToggle,
    onOpenToggle,
  };
}
