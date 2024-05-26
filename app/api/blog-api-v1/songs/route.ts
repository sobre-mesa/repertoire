import prisma from "@/lib/prisma";
import { GenericPOSTParams, genericGetAll, genericPOST } from "../../utils/prismaUtils";
import { ISong } from "@/types/ISong";
import { PostRequestBody } from "@/types/PostRequestBody";

const model = prisma.song;
const postParams  = (data: PostRequestBody<ISong>) : GenericPOSTParams => (
  {
    model,
    data,
  }
)

export async function POST(req: Request) {
  const data: PostRequestBody<ISong> = await req.json();
  return await genericPOST(postParams(data));
}

export async function GET(req: Request) {
  return genericGetAll(model);
}
