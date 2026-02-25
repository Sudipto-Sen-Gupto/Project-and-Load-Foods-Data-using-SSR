 
 export const feedback=[
    {
        id:1,
        review:"Food was so scrumptious. I really enjoyed the food."
    },
    {
        id:2,
        review:"Food was delicious but the manner of stuff should be improved."
    }
 ]


export async function GET(request){
    return  Response.json({
        status:200,
        message:"The API is working fine"
    })
}