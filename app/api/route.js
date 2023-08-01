import {NextResponse} from "next/server";
import user from "./data.json"


export async function GET() {
    console.log("name : ", user.user );
    return NextResponse.json([{id : 1 , name: 'Anuj Singh' },{id : 2, name : "reza"}]);
  }