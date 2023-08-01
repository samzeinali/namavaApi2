import {NextResponse} from "next/server";
import data from "../data.json"


export async function GET() {
    const datamovie = data.movies;
    return NextResponse.json(datamovie);
  }

export const moviedata = data.movies;