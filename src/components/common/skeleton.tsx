import React from 'react';

interface SkeletonProps {
  width: number;
  height: number;
  radius: string;
}

const Skeleton = ({ width, height, radius }: SkeletonProps) => {
  return (
    <div
      className={`w-${width} h-${height} rounded-${radius} relative float-left bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 bg-auto bg-no-repeat animate-spin`}
    />
  );
};

export default Skeleton;
