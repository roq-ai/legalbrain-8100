import * as yup from 'yup';

export const legalResearchValidationSchema = yup.object().shape({
  research_topic: yup.string().required(),
  user_id: yup.string().nullable(),
});
