'use server';
import { Book } from '@/types/book';
import { HTTP_METHOD_TYPE, fetcher } from '../fetcher';
import { BOOK } from '../urls';
import { revalidateTag } from 'next/cache';

export const createBook = async (body: FormData) => {
  const response = await fetcher<Book>({
    path: BOOK,
    config: { method: HTTP_METHOD_TYPE.POST, body },
  });

  if (response) {
    revalidateTag('book');
  }
};
