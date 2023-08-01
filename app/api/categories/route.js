import {NextResponse} from "next/server";
import data from "../data.json";


export async function GET() {
    const dataCategories = data.categories;
    return NextResponse.json(dataCategories);
  }

export const categoriesData = data.categories;