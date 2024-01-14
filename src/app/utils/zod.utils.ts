// vendors
import { ZodIssue } from 'zod';

export const mapIssues = (
  issues: ZodIssue[]
): Record<string | number, string> =>
  issues.reduce(
    (previous, current) => ({
      ...previous,
      ...current.path.reduce(
        (nprevious, ncurrent) => ({
          ...nprevious,
          [ncurrent]: current.message,
        }),
        {} as Record<string | number, string>
      ),
    }),
    {} as Record<string | number, string>
  );
