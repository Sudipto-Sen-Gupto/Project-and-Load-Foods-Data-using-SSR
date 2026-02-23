"use client";

import Image from "next/image";
import React, { useState } from "react";

const ReviewCard = ({ review }) => {
  const [likes, setLikes] = useState(review.likes.length);
  const [liked, setLiked] = useState(false);

  const formattedDate = new Date(review.date).toLocaleDateString(
    "en-BD",
    { year: "numeric", month: "long", day: "numeric" }
  );

  // const handleLike = () => {
  //   if (liked) {
  //     setLikes(likes - 1);
  //     setLiked(false);
  //   } else {
  //     setLikes(likes + 1);
  //     setLiked(true);
  //   }
  // };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition duration-300">

      {/* Top Section */}
      <div className="flex items-center gap-4 mb-4">
        {/* <img
          src={review.photo}
          alt={review.user}
          className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
        /> */}

        <Image  src={review.photo}
          alt={review.user}
          className="w-14 h-14 rounded-full object-cover border-2 border-green-500" height={400} width={400} />

        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-800">
            {review.user}
          </h3>
          <p className="text-sm text-gray-500">{review.email}</p>
        </div>

        <div className="text-sm text-gray-400">
          {formattedDate}
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className="text-yellow-400 text-lg">
            {index < review.rating ? "★" : "☆"}
          </span>
        ))}
        <span className="ml-2 text-gray-600 text-sm">
          ({review.rating}.0)
        </span>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed mb-4">
        {review.review}
      </p>

      {/* Like Section */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span className="flex items-center gap-2">
          <span className={`text-lg ${liked ? "text-red-500" : ""}`}>
            ❤️
          </span>
          {likes} Likes
        </span>

        <button
          onClick={()=>{
            setLiked(!liked)
          setLikes(liked?likes-1:likes+1)}}
          className={`font-medium transition ${
            liked
              ? "text-red-500"
              : "hover:text-green-600"
          }`}
        >
          {liked ? "Unlike" : "Like Review"}
        </button>
      </div>

    </div>
  );
};

export default ReviewCard;
