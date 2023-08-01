import {NextResponse} from "next/server";
import { HomeSlider1Data } from "../route"

export async function GET(req) {
    console.log(req.url);
    const pathArray = req.url.split("/");
    const pathLength = pathArray.length;
    const path = pathArray[pathLength - 1]
    console.log("this path : " , path);
    const slide = HomeSlider1Data.find((slide)=>{
        return slide.id == path
    });
    return NextResponse.json(slide);
  }