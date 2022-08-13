import { useField } from "formik";

type CustomCheckboxProps = {
  label: string;
}

export const CustomCheckbox = ({ label, ...props }: CustomCheckboxProps) => {
  // const [field, meta] = useField(props);

  return (
    <>
      {/* <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>I accept the terms of service</span>
      </div>

      {meta.touched && meta.error && <div className="error">{meta.error}</div>} */}
    </>
  );
};