import * as yup from 'yup';

export const legalDocumentValidationSchema = yup.object().shape({
  document_name: yup.string().required(),
  user_id: yup.string().nullable(),
});
