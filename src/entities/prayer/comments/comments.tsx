import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@shared/store';
import { actions, selectors } from '@shared/store/ducks/comments';
import { UICommentsList } from '@shared/ui/components/comments-list';

interface Props {
  prayerId: number;
}

export const CommentsEntity = ({ prayerId }: Props) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => selectors.selectComments(state, prayerId));

  useEffect(() => {
    dispatch(actions.fetchCommentsByPrayerId(prayerId));
  }, [prayerId, dispatch]);

  return <UICommentsList data={comments} />;
};
