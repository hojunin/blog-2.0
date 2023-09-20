import { DATE, ID } from './common';

export interface Feed {
  id: ID;
  description: string;
  image?: string;
  created: DATE;
}

export interface CreateFeedEntity {
  description: string;
  image?: File;
}
