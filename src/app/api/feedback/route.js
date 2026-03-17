import { connect } from "@/app/lib/mongoDB";


  const feedBack=await connect("feedbacks");

export async function GET(request){

   
     const result=await feedBack.find().toArray();

    return Response.json(result)
}

export async function POST(request){

    const {message}=await request.json();

    if(!message || typeof message !=="string"){
        return Response.json({
               status:400,
               message:"Send a valid message"
        })
    }
        
    //   const newFeedback={message,id:feedBack.length+1}

    const newFeedback={message,date:new Date().toISOString()};
     const result =await feedBack.insertOne(newFeedback);

     return Response.json(result)
           
    // return Response.json({
    //     //   status:200,
    //     //   data:message

    //     acknowledgement:true,
    //     insertedId: newFeedback.id
    // })
}