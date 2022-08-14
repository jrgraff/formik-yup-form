import * as yup from "yup";

export const formInitialValues = {
  title: '',
  description: '',
  questions: [{ description: '', required: true }]
}

export const formSchemaValidation = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .min(5, "Title needs to be at least 5 characters"),
  description: yup.string(),
  
});
