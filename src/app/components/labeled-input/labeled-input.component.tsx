// vendors
import { DetailedHTMLProps, InputHTMLAttributes, useId } from 'react';

export const LabeledInput = ({
  label,
  ...rest
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
}) => {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </>
  );
};
