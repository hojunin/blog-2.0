'use server';
import { Book } from '@/types/book';
import { HttpMethodType, fetcher } from '../fetcher';
import { BOOK } from '../urls';
import { revalidateTag } from 'next/cache';

export const createBook = async (body: FormData) => {
  try {
    const response = await fetcher<Book>({
      path: BOOK,
      config: { method: HttpMethodType.POST, body },
    });

    if (response) {
      revalidateTag('book');
    }
  } catch (error) {}
};
