import * as yup from 'yup';
import { NotificationValidationEnum } from '../types/enam';

export const validationSchema = yup.object().shape({
  title: yup.string().required(NotificationValidationEnum.titleField),
  autor: yup.string().required(NotificationValidationEnum.titleAuthorField),
  year: yup
    .number()
    .required(NotificationValidationEnum.titleYearField)
    .integer(NotificationValidationEnum.titleTearInteger),
  rating: yup
    .number()
    .required(NotificationValidationEnum.titleRaiting)
    .min(0, NotificationValidationEnum.minValue)
    .max(5, NotificationValidationEnum.maxValue),
});
