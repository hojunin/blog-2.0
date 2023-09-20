import React from 'react';
import Skeleton from '../common/skeleton';

const dummy = Array(10).fill(null);

const FeedLoading = () => {
  return (
    <ul className="flex flex-col gap-5">
      {dummy.map((_, index) => (
        <li
          key={index.toString()}
          className="flex flex-1 mb-3 border-border-color border-2 p-3 rounded-lg hover:border-primary-color"
        >
          <div className="flex gap-3 items-center justify-start">
            <Skeleton width={10} height={10} radius={'full'} />
            <div className="flex flex-col flex-1 h-full w-full gap-2 bg-lime-800">
              <Skeleton width={32} height={3} radius="xl" />
              <Skeleton width={56} height={3} radius="xl" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FeedLoading;
