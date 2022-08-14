type ErrorLabelProps = {
  children: React.ReactNode;
}

export const ErrorLabel = ({children}: ErrorLabelProps) => {
  return (
    <p className="text-red-500 text-xs mt-1">{children}</p>
  )
}