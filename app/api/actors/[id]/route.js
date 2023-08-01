import {NextResponse} from "next/server";
import {actorsData} from "../route"

export async function GET(req) {
    console.log(req.url);
    const pathArray = req.url.split("/");
    const pathLength = pathArray.length;
    const path = pathArray[pathLength - 1]
    console.log("this path : " , path);
    const actor = actorsData.find((actor)=>{
        return actor.id == path
    });
    return NextResponse.json(actor);
  }