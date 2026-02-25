import { feedback } from "../route";

export function GET(request){
    return Response.json(feedback)
}