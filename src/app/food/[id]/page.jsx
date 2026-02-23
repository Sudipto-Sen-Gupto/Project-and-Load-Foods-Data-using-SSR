import React from 'react';


 export function generateStaticParams() {
  return [{ id: '53019' }, { id: '52839' }, { id: '52965' }]
}
      
    export const  generateMetadata=async({params})=>{
             const {id}=await params;
             
             const foods=await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
    const {details={}} =await foods.json();
        
    return{
            title:details.title,
    }

  

    }

  const FoodLayout=async(id)=>{
    const foods=await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
    const res =await foods.json();
    
    return res.details
  }

const page = async({params}) => {
    const {id}=await params;
    
    const food= await FoodLayout(id);
   
    if(!food ||Number(food.id)!==Number(id)){
        return <div>Food Not Found</div>
    }

      const embedUrl = food?.video
  ? food.video.replace("watch?v=", "embed/")
  : null;


    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-5">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        <div className="grid md:grid-cols-2 gap-8 p-8">
          
          {/* Image Section */}
          <div className="relative">
            <img
              src={food.foodImg}
              alt={food.title}
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <span className="absolute top-4 left-4 bg-green-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
              {food.category}
            </span>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-between">
            
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {food.title}
              </h1>

              <p className="text-gray-600 mb-6">
                A rich, moist, and completely plant-based chocolate cake.
                Perfect for dessert lovers who enjoy a healthy twist!
              </p>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-green-600">
                  ৳ {food.price}
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {food.area} Cuisine
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300">
                Add to Cart
              </button>
              <button className="flex-1 bg-gray-900 hover:bg-black text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="p-8 pt-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Recipe Video
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[400px] rounded-2xl shadow-lg"
              src={embedUrl}
              title="Recipe Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </div>
        </div>
    );
};

export default page;