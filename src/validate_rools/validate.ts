import * as yup from 'yup';
import { NotificationValidationEnum } from '../types/enam';

export const validationSchema = yup.object().shape({
  title: yup.string().required(NotificationValidationEnum.titleField),

  description: yup.string().required(NotificationValidationEnum.titleAuthorFieldDescription),

  priority: yup
    .number()

    .required(NotificationValidationEnum.titlePriorityField)
    .min(0, NotificationValidationEnum.minValue)
    .max(5, NotificationValidationEnum.maxValue),

  deadline: yup.mixed().notRequired().nullable(),
});
