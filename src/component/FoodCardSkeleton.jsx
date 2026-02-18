import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className=" bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full h-56 bg-gray-300"></div>

      {/* Content Section */}
      <div className="p-5 space-y-4">
        
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>

        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>

        {/* Price + ID Skeleton */}
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/6"></div>
        </div>

        {/* Buttons Skeleton */}
        <div className="flex gap-3">
          <div className="h-10 bg-gray-300 rounded-lg flex-1"></div>
          <div className="h-10 bg-gray-300 rounded-lg flex-1"></div>
        </div>

      </div>
    </div>
  );
};

export default FoodCardSkeleton;
