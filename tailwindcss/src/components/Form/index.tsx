import { CustomInput } from "../CustomInput";
import { CustomButton } from "../CustomButton";
import { Formik, Form as FormikForm } from "formik";
import { CustomDropdown } from "../CustomDropdown";
import {
  formInitialValues,
  formSchemaValidation,
} from "../../validations/Form";

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
            {({ values, errors, isSubmitting }) => (
              <FormikForm autoComplete="off">
                <div className="py-4 px-8">
                  <CustomInput
                    label="Title"
                    name="title"
                    type="text"
                    placeholder="Digite um título.."
                  />
                  <CustomInput
                    label="Description"
                    name="description"
                    type="text"
                    placeholder="Digite uma descrição.."
                  />

                  <div className="flex justify-between mt-8">
                    {/* <CustomDropdown
                      buttonName="Options"
                      options={[
                        { id: "1", description: "Text" },
                        { id: "2", description: "Score" },
                      ]}
                    /> */}

                    <CustomButton disabled={isSubmitting} type="submit">
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
