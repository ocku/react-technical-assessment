import { FetchOptions } from 'ofetch';

export type WithId = { id: string };

export type ApiHandler<T extends WithId> = {
  getOne: (args: { id: T['id'] }) => Promise<T>;
  deleteOne: (args: { id: T['id'] }) => Promise<Record<never, never>>;
  createOne: (document: T) => Promise<T>;
  updateOne: (document: WithId, updated: Partial<Omit<T, 'id'>>) => Promise<T>;
  getAll: (props: {
    query?: FetchOptions<'json'>['params'];
    page?: number;
    limit?: number;
  }) => Promise<{
    data: T[];
    totalItems: number;
  }>;
};
