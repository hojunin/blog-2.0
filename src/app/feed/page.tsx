import FeedList from '@/components/feed/feed-list';
import React from 'react';

const FeedPage = () => {
  return (
    <div>
      <h1 className="text-h1 mb-5">피드</h1>

      <FeedList />
    </div>
  );
};

export default FeedPage;
