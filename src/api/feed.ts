import { Feed } from '@/types/feed';
import { fetcher } from './fetcher';
import { FEED } from './urls';

export const fetchFeeds = async () => {
  const response = await fetcher<Feed[]>({
    path: FEED,
    config: { cache: 'no-cache', method: 'GET' },
  });
  return response;
};
