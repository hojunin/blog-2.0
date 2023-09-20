'use server';
import { Feed } from '@/types/feed';
import { HttpMethodType, fetcher } from '../fetcher';
import { FEED } from '../urls';
import { revalidateTag } from 'next/cache';

export const createFeed = async (body: FormData) => {
  try {
    const response = await fetcher<Feed>({
      path: FEED,
      config: {
        method: HttpMethodType.POST,
        body,
        headers: {},
      },
    });

    if (response) {
      revalidateTag('feed');
    }
  } catch (error) {
    throw error;
  }
};
