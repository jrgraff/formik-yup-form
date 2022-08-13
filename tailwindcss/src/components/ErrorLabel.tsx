type ErrorLabelProps = {
  message: string;
}

export const ErrorLabel = ({message}: ErrorLabelProps) => {
  return (
    <p className="text-red-500 text-xs mt-1">{message}</p>
  )
}