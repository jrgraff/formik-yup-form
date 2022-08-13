type ButtonType = "submit" | "reset" | "button" | undefined

type CustomButtonProps = {
  type: ButtonType;
  children: React.ReactNode;
  className?: string;
}

export const CustomButton = ({type, className, children}: CustomButtonProps) => {
  return (
    <button
      className={"flex items-center gap-1 bg-blue-500 hover:opacity-80 text-white font-bold py-2 px-4 rounded-full " + className}
      type={type}
    >
      {children}
    </button>
  );
};
