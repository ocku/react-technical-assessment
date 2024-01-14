// vendors
import { ChangeEvent, FocusEvent } from 'react';
import { z } from 'zod';

export type UseFormValue<
  TValidator extends z.AnyZodObject | z.ZodRecord,
  TValues extends Record<string, unknown>,
> = {
  values: TValues;
  errors: Record<string | number, string> | undefined;
  parsed: z.infer<TValidator> | undefined;
  canSave: boolean;
  save: () => void;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};
