import {NextResponse} from "next/server";
import {moviedata} from "../route"

export async function GET(req) {
    console.log(req.url);
    const pathArray = req.url.split("/");
    const pathLength = pathArray.length;
    const path = pathArray[pathLength - 1]
    console.log("this path : " , path);
    const movie = moviedata.find((movie)=>{
        return movie.id == path
    });
    return NextResponse.json(movie);
  }