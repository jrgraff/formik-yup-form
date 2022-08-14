type ButtonType = "submit" | "reset" | "button" | undefined;

type CustomButtonProps = {
  type: ButtonType;
  disabled: boolean;
  children: React.ReactNode;
  className?: string;
};

export const CustomButton = ({
  type,
  disabled,
  className,
  children,
}: CustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={
        "flex items-center gap-1 bg-blue-500 hover:opacity-80 text-white font-bold py-1.5 px-4 rounded-md " +
        className
      }
      type={type}
    >
      {children}
    </button>
  );
};
