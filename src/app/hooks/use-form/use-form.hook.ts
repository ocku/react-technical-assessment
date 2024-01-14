// vendors
import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import { z } from 'zod';
// types
import { UseFormValue } from './use-form.hook.types';
// mappers
import { mapIssues } from '@/app/utils/zod.utils';

export const useForm = <
  TValidator extends z.AnyZodObject | z.ZodRecord,
  TValues extends Record<string, unknown>,
>({
  validator,
  defaultValues,
  onSave,
}: {
  validator: TValidator;
  defaultValues: TValues;
  onSave: (value: z.infer<TValidator>) => unknown;
}): UseFormValue<TValidator, TValues> => {
  const [values, setValues] = useState<TValues>(
    defaultValues || ({} as TValues)
  );

  const [parsed, setParsed] = useState<z.infer<TValidator> | undefined>();
  const [errors, setErrors] = useState<
    Record<string | number, string> | undefined
  >();

  useEffect(() => {
    setValues((oldValues) => ({
      ...defaultValues,
      ...oldValues,
    }));
  }, [defaultValues]);

  useEffect(() => {
    const parsed = validator.safeParse(values);

    if (parsed.success) {
      setParsed(parsed.data);
      setErrors(undefined);
      return;
    }

    setParsed(undefined);
    setErrors(mapIssues(parsed.error.issues));
  }, [values, validator]);

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!event.target.name) {
      throw new Error('Input or TextArea must have a name');
    }

    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const onBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!event.target.name) {
      throw new Error('Input or TextArea must have a name');
    }

    const inputError = errors?.[event.target.name];

    if (inputError) {
      event.target.setCustomValidity(inputError);
      event.target.reportValidity();
    }
  };

  const save = () => parsed && onSave(parsed);

  return {
    values,
    errors,
    parsed,
    save,
    canSave: !!parsed,
    onChange,
    onBlur,
  };
};
