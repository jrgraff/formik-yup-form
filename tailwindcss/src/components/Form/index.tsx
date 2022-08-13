import { FiPlus } from "react-icons/fi";

import { CustomInput } from "../CustomInput";
import { CustomButton } from "../CustomButton";

export const Form = () => {
  return (
    <div className="w-full h-full bg-grey-lightest pt-20">
      <div className="container mx-auto py-8">
        <div className="w-5/6 lg:w-1/2 mx-auto bg-gray-200 rounded shadow">
          <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
            Create your form
          </div>
          <div className="py-4 px-8">
            <CustomInput label="Title" placeholder="Digite um título.." />
            <CustomInput label="Description" placeholder="Digite uma descrição.." />

            <div className="flex justify-between mt-8">
              <CustomButton className="bg-gray-800" type="button">
                <FiPlus />
                Add item
              </CustomButton>
              <CustomButton type="submit">Submit</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
