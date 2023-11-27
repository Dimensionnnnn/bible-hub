import { messages } from '@shared/constants/authentication-error-messages/authentication-error-messages';
import * as yup from 'yup';

export const schema = yup.object({
  email: yup.string().email(messages.email).required(messages.emailRequired),
  password: yup.string().min(5, messages.passwordShort).required(messages.passwordRequired),
});
