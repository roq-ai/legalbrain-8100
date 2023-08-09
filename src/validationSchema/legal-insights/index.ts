import * as yup from 'yup';

export const legalInsightValidationSchema = yup.object().shape({
  insight_name: yup.string().required(),
  user_id: yup.string().nullable(),
});
