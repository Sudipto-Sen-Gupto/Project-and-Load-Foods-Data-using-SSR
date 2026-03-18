import { connect } from "@/app/lib/mongoDB";
// import { feedback } from "../../route";
import { ObjectId } from "mongodb";

const feedBack=await connect("feedbacks");

export async function GET(request,{params}){
      
     

    const {id}=await params;
         
       if(id.length!=24){
          return Response.json({
               status:400,
               message:"send a valid id"
          })
       }

    const query={_id:new ObjectId(id)};
         
    const result=await feedBack.findOne(query);
    return Response.json(result);

    
      
   
}

export async function DELETE(request,{params}){
         const {id}=await params;
         const query={_id:new ObjectId(id)};

         const result =await feedBack.deleteOne(query);
         return Response.json (result)
}