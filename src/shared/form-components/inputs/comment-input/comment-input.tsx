import { Controller, useForm } from 'react-hook-form';
import { Keyboard } from 'react-native';

import { useAppDispatch } from '@shared/store';
import { actions } from '@shared/store/ducks/comments';
import { UICommentInput } from '@shared/ui/components/inputs/comment-input';

interface Props {
  prayerId: number;
}

export const CommentFormInput = ({ prayerId }: Props) => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      comment: '',
    },
  });

  const onSubmit = (dataSubmit: any) => {
    dispatch(actions.fetchCreateCommentByPrayerId({ prayerId, body: dataSubmit.comment }));
    reset({ comment: '' });
    Keyboard.dismiss();
  };

  return (
    <Controller
      control={control}
      name="comment"
      render={(renderProps) => (
        <UICommentInput
          placeholder="Enter your comment"
          {...renderProps}
          onSubmitButtonPress={handleSubmit(onSubmit)}
        />
      )}
    />
  );
};
