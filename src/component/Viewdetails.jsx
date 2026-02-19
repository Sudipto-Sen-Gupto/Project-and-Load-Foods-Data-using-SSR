import React from "react";


const FoodLayout=async(id)=>{
      const foods= await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
      const res=await foods.json();
      return res.details
}
const FoodDetails = async({params}) => {
  const {id}=await params;
  const food= FoodLayout();


  // Convert youtube link to embed format
  

  return (
    <div>{id}</div>
   
  );
};

export default FoodDetails;
