import * as yup from "yup";

export const formInitialValues = {
  title: '',
  description: '',
  questions: [{ index: 0, description: '', required: true, type: 'text' }]
}

export const formSchemaValidation = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .min(5, "Title needs to be at least 5 characters"),
  description: yup.string(),
  questions: yup.array(
    yup.object({
      description: yup.string()
        .required('Description is required')
    })
  )
    .min(1, 'You need to provide at least 1 question')
});
