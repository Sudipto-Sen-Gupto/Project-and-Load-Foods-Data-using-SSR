import Link from "next/link";
import React from "react";
import CartButton from "./CartButton";

const FoodCards = ({food}) => {
  

  return (
    <div className=" bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      
      {/* Image Section */}
      <div className="relative">
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {food.category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {food.title}
        </h2>

        <p className="text-gray-600 text-sm mb-4">
          Delicious homemade dessert with fresh apples and blackberries.
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-green-600">
            ৳ {food.price}
          </span>
          <span className="text-sm text-gray-500">
            ID: {food.id}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          
          <div className="flex-1 w-full">
            <CartButton food={food}></CartButton>
          </div>

          <Link  href={`/food/${food.id}`} className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md text-center">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
