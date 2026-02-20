"use client";
import { CartContext } from "@/Context/CartProvider";
import React, { use } from "react";

const CardItems = () => {
  const { cartItems } = use(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-400">
        🛒 Your Cart Items({cartItems.length})
      </h1>

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Cat ID</th>
              <th className="p-4">Price (৳)</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((item, index) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50 transition duration-200"
              >
                <td className="p-4 font-medium">{index + 1}</td>
                <td className="p-4 font-semibold text-gray-800">
                  {item.title}
                </td>
                <td className="p-4 text-gray-600">{item.category}</td>
                <td className="p-4 text-gray-600">{item.catId}</td>
                <td className="p-4 font-bold text-green-600">
                  ৳ {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="mt-6 flex justify-between items-center bg-gray-100 p-4 rounded-xl">
        <p className="text-xl font-semibold">
          Total Items: {cartItems.length}
        </p>
        <p className="text-xl font-bold text-green-700">
          Total Price: ৳ {totalPrice}
        </p>
      </div>
    </div>
  );
};

export default CardItems;