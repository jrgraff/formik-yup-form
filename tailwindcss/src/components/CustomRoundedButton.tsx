type ButtonType = "submit" | "reset" | "button" | undefined;

type CustomRoundedButtonProps = {
  type: ButtonType;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export const CustomRoundedButton = ({
  type,
  disabled,
  onClick: incomingFunction,
  className,
  children,
}: CustomRoundedButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={() => incomingFunction()}
      className={
        "inline-flex items-center justify-center w-6 h-6 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200 " +
        className
      }
      type={type}
    >
      {children}
    </button>
  );
};
