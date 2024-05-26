import prisma from "@/lib/prisma";
import { GenericPOSTParams, genericGetAll, genericPOST } from "../../utils/prismaUtils";
import { ISongProgress } from "@/types/ISongProgress";
import { PostRequestBody } from "@/types/PostRequestBody";

const model = prisma.songProgress;
const postParams  = (data: PostRequestBody<ISongProgress>) : GenericPOSTParams => (
  {
    model,
    data,
  }
)

export async function POST(req: Request) {
  const data: PostRequestBody<ISongProgress> = await req.json();
  return await genericPOST(postParams(data));
}

export async function GET(req: Request) {
  return genericGetAll(model);
}
