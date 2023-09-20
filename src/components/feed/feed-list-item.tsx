import { Feed } from '@/types/feed';
import { getElapsedTime } from '@/utils/date';
import Image from 'next/image';
import React from 'react';

interface Props {
  feedItem: Feed;
}

const FeedListItem = ({ feedItem }: Props) => {
  return (
    <li className=" mb-3 border-border-color border-2 p-3 rounded-lg hover:border-primary-color">
      <div className="flex gap-3 items-center justify-start">
        <Image
          src="https://avatars.githubusercontent.com/u/18079523?v=4"
          alt="주인장 사진"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col gap-2">
          <p>
            hjinn﹒
            <span className="text-disabled-color text-xs">
              {getElapsedTime(feedItem.created)}
            </span>
          </p>
          <p>{feedItem.description}</p>
        </div>
      </div>
      {feedItem.image && (
        <Image
          src={feedItem.image}
          alt={`${feedItem.description} 사진`}
          width={200}
          height={200}
          sizes="100vw"
          style={{
            width: '70%',
            maxWidth: 300,
            height: 'auto',
          }}
          objectFit="contain"
          className="rounded-lg border-border-color border-2 overflow-hidden ml-12 mt-6"
        />
      )}
    </li>
  );
};

export default FeedListItem;
