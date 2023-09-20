import { fetchFeeds } from '@/api/feed';
import React from 'react';
import FeedListItem from './feed-list-item';

const FeedList = async () => {
  const feeds = await fetchFeeds();
  return (
    <div>
      {feeds.map((feed) => (
        <FeedListItem key={feed.id} feedItem={feed} />
      ))}
    </div>
  );
};

export default FeedList;
