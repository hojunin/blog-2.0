import React from 'react';

interface SkeletonProps {
  width: number;
  height: number;
  radius: string;
}

const Skeleton = ({ width, height, radius }: SkeletonProps) => {
  return (
    <div
      className={`w-${width} h-${height} rounded-${radius} relative float-left bg-slate-800 animate-pulse`}
    />
  );
};

export default Skeleton;
