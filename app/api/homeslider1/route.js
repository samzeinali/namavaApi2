import {NextResponse} from "next/server";
import data from "../data.json";


export async function GET() {
    const dataHomeSlider1 = data.slider_home_1;
    return NextResponse.json(dataHomeSlider1);
  }

export const HomeSlider1Data = data.slider_home_1;