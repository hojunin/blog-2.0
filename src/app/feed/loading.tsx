import FeedLoading from '@/components/feed/feed-loading';
import React from 'react';

const Loading = () => {
  return (
    <div>
      <h1 className="text-h1 mb-5">피드</h1>

      <FeedLoading />
    </div>
  );
};

export default Loading;
