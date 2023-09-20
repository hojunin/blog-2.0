import { Feed } from '@/types/feed';
import React from 'react';

interface Props {
  feedItem: Feed;
}

const FeedListItem = ({ feedItem }: Props) => {
  return <p>{feedItem.description}</p>;
};

export default FeedListItem;
