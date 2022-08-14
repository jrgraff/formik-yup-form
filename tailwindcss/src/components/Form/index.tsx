import { CustomInput } from "../CustomInput";
import { CustomButton } from "../CustomButton";
import { Formik, Form as FormikForm, FieldArray } from "formik";
import { CustomDropdown } from "../CustomDropdown";
import {
  formInitialValues,
  formSchemaValidation,
} from "../../validations/Form";
import { FiChevronDown, FiChevronUp, FiTrash } from "react-icons/fi";
import { CustomRoundedButton } from "../CustomRoundedButton";
import { ErrorLabel } from "../ErrorLabel";
import { CustomToggle } from "../CustomToggle";

type QuestionsType = {
  description: string;
  required: boolean;
};

type FormType = {
  title: string;
  description: string;
  questions: QuestionsType[];
};

const onSubmit = async (values: FormType) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

export const Form = () => {
  return (
    <div className="w-full h-full bg-grey-lightest pt-20">
      <div className="container mx-auto py-8">
        <div className="w-5/6 lg:w-1/2 mx-auto bg-gray-200 rounded shadow">
          <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
            Create your form
          </div>
          <Formik
            initialValues={formInitialValues}
            validationSchema={formSchemaValidation}
            onSubmit={onSubmit}
          >
            {(props) => (
              <FormikForm autoComplete="off">
                <div className="py-4 px-8">
                  <CustomInput
                    label="Title"
                    name="title"
                    type="text"
                    placeholder="Title here.."
                  />
                  <CustomInput
                    label="Description"
                    name="description"
                    type="text"
                    placeholder="Description here.."
                  />

                  <FieldArray name="questions">
                    {({ push, remove }) => (
                      <>
                        {props.values.questions.length > 0 && <label className="block text-grey-darker text-sm font-bold">
                          Questions:
                        </label>}
                        {props.values.questions.map((question, index,) => (
                          <div key={index} className="flex bg-white rounded-md mt-2">
                            <div className="flex flex-col justify-between m-2">
                              <CustomRoundedButton disabled={props.isSubmitting || index === 0} type="button" onClick={() => { }}><FiChevronUp /></CustomRoundedButton>
                              <p className="text-sm m-auto">{question.index + 1}.</p>
                              <CustomRoundedButton disabled={props.isSubmitting || index === props.values.questions.length - 1} type="button" onClick={() => { }}><FiChevronDown /></CustomRoundedButton>
                            </div>
                            <div className="flex flex-col mt-4 mr-2 w-full">
                              <CustomInput
                                label="Description"
                                name={`questions[${index}].description`}
                                type="text"
                                placeholder="Description here.."
                              />
                              <div className="flex justify-end mb-2">
                                <CustomToggle enabled={question.required} setEnabled={(value) => props.setFieldValue(`questions[${index}].required`, value)} />
                                <CustomRoundedButton className="mr-0" disabled={props.isSubmitting} type="button" onClick={() => remove(index)}><FiTrash /></CustomRoundedButton>
                              </div>
                            </div>
                          </div>
                        ))}

                        {typeof props.errors.questions === 'string' ? (
                          <ErrorLabel>
                            {props.errors.questions}
                          </ErrorLabel>
                        ) : null}

                        <div className="flex justify-start mt-8">
                          <CustomDropdown
                            onSelect={(option) => push({ index: props.values.questions.length, description: '', required: true, type: option.id })}
                            options={[
                              { id: "text", description: "Text" },
                              { id: "score", description: "Score" },
                            ]}
                          >Options
                            <FiChevronDown
                              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                              aria-hidden="true"
                            />
                          </CustomDropdown>
                        </div>
                      </>
                    )}
                  </FieldArray>

                  <div className="flex justify-end gap-2 mt-8">
                    <CustomButton disabled={props.isSubmitting} type="button">
                      Cancel
                    </CustomButton>
                    <CustomButton disabled={props.isSubmitting} type="submit">
                      Submit
                    </CustomButton>
                  </div>
                </div>
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
