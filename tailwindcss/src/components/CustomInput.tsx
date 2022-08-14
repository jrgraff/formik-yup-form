import { useField } from "formik";
import { ErrorLabel } from "./ErrorLabel";

type CustomInputProps = {
  label: string;
  placeholder: string;
  name: string;
  type: string;
  className?: string;
};

export const CustomInput = ({
  label,
  placeholder,
  className,
  ...props
}: CustomInputProps) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2">
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={"appearance-none border rounded w-full py-2 px-3 text-grey-darker " + className}
        placeholder={placeholder}
      />
      {meta.touched && meta.error && <ErrorLabel>{meta.error}</ErrorLabel>}
    </div>
  );
};
