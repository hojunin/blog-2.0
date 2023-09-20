import { Feed } from '@/types/feed';
import { getElapsedTime } from '@/utils/date';
import Image from 'next/image';
import React from 'react';

interface Props {
  feedItem: Feed;
}

const FeedListItem = ({ feedItem }: Props) => {
  return (
    <li className="flex gap-3 items-center justify-start mb-3 border-border border-2 p-3 rounded-lg hover:border-primary">
      <span className="rounded-full overflow-hidden">
        <Image
          src="https://avatars.githubusercontent.com/u/18079523?v=4"
          alt="주인장 사진"
          width={40}
          height={40}
        />
      </span>
      <div className="flex flex-col gap-2">
        <p>{`hjinn - ${getElapsedTime(feedItem.created)}`}</p>
        <p>{feedItem.description}</p>
      </div>
    </li>
  );
};

export default FeedListItem;
