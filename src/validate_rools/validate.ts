import * as yup from 'yup';
import { NotificationValidationEnum } from '../types/enam';

export const validationSchema = yup.object().shape({
  title: yup.string().required(NotificationValidationEnum.titleField),
  autor: yup.string().required(NotificationValidationEnum.titleAuthorField),
  priority: yup.string().required(NotificationValidationEnum.titlePriorityField),

  deadline: yup
    .number()
    .required(NotificationValidationEnum.titleRaiting)
    .min(0, NotificationValidationEnum.minValue)
    .max(5, NotificationValidationEnum.maxValue),
});
