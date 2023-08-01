import {NextResponse} from "next/server";
import data from "../data.json"


export async function GET() {
    const dataActor = data.actors;
    return NextResponse.json(dataActor);
  }

export const actorsData = data.actors;