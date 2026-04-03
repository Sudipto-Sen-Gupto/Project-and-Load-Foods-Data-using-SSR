"use client"
import React, { useState } from 'react';

const FeedbackCard = ({card}) => {
    const [data, setData] = useState(card);

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...data });

  const handleDelete =async () => {
    alert("Deleted! Connect this to your Next.js API route.");
    const deleteFeedback= await fetch(`/api/feedback/${data._id}`,{
      method:'DELETE'
      
    })
    const res=await deleteFeedback.json();

    console.log(res);
    return res;
  };

  const handleSave = () => {
    setData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(data);
    setIsEditing(false);
  };

  return (
    <div className=" ">
      <div className="bg-white shadow-2xl rounded-2xl p-6 ">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">🍽 Feedback</h2>
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <button onClick={handleSave} className="px-3 py-1 bg-green-500 text-white rounded">Save</button>
                <button onClick={handleCancel} className="px-3 py-1 bg-gray-400 text-white rounded">Cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => setIsEditing(true)} className="px-3 py-1 bg-blue-500 text-white rounded">Edit</button>
                <button onClick={handleDelete} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
              </>
            )}
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-3">ID: {data._id}</p>

        {/* Food */}
        <div className="mb-3">
          <p className="text-sm font-semibold text-gray-600">Food</p>
          {isEditing ? (
            <input
              className="w-full border rounded p-2 mt-1"
              value={editData.Food}
              onChange={(e) => setEditData({ ...editData, Food: e.target.value })}
            />
          ) : (
            <p className="text-gray-800">{data.Food}</p>
          )}
        </div>

        {/* Message */}
        <div className="mb-3">
          <p className="text-sm font-semibold text-gray-600">Message</p>
          {isEditing ? (
            <textarea
              className="w-full border rounded p-2 mt-1"
              value={editData.message}
              onChange={(e) => setEditData({ ...editData, message: e.target.value })}
            />
          ) : (
            <p className="text-gray-800">{data.message}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <p className="text-sm font-semibold text-gray-600">Date</p>
          <p className="text-gray-500 text-sm">
            {new Date(data.date).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;


