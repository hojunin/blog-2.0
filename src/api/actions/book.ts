'use server';
import { Book } from '@/types/book';
import { HTTP_METHOD_TYPE, fetcher } from '../fetcher';
import { BOOK } from '../urls';
import { revalidateTag } from 'next/cache';

export const createBook = async (body) => {
  console.log('🚀 ~ file: book.ts:8 ~ createBook ~ body:', body);
  const response = await fetcher<Book>({
    path: BOOK,
    config: { method: HTTP_METHOD_TYPE.POST },
  });

  if (response) {
    revalidateTag('book');
  }
};
