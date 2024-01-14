import { ofetch } from 'ofetch';
import { ApiHandler } from './api.types';

type WithId = { id: string };

export const buildAPIHandler = <T extends WithId>({
  baseURL,
}: {
  baseURL: string;
}): ApiHandler<T> => ({
  getOne: async ({ id }) => ofetch(id, { baseURL }),

  deleteOne: async ({ id }) => ofetch(id, { baseURL, method: 'DELETE' }),

  createOne: async (document) =>
    ofetch(baseURL, {
      method: 'POST',
      body: document,
    }),

  updateOne: async (document, updated) =>
    ofetch(document.id, {
      baseURL,
      method: 'PUT',
      body: {
        ...document,
        ...updated,
      },
    }),

  getAll: async ({ query = {}, page = 0, limit = 0 }) => {
    const params = { ...query, _page: page, _limit: limit };
    const res = await ofetch.raw(baseURL, { params });

    return {
      data: res._data,
      totalItems: Number.parseInt(res.headers.get('X-Total-Count')!),
    };
  },
});
