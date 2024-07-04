import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonLoader = () => {
  return (
    <div className="space-y-4">
      {[...Array(10)].map((_, index) => (
        <Skeleton key={index} className="w-full h-24 rounded-lg" />
      ))}
    </div>
  );
};

export default SkeletonLoader;