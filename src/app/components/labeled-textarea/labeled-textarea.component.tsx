// vendors
import { DetailedHTMLProps, TextareaHTMLAttributes, useId } from 'react';

export const LabeledTextarea = ({
  label,
  ...rest
}: DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label: string;
}) => {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...rest} />
    </>
  );
};
