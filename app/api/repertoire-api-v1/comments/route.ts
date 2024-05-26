import prisma from "@/lib/prisma";
import { GenericPOSTParams, genericGetAll, genericPOST } from "../../utils/prismaUtils";
import { IComment } from "@/types/IComment";
import { PostRequestBody } from "@/types/PostRequestBody";

const model = prisma.comment;
const postParams  = (data: PostRequestBody<IComment>) : GenericPOSTParams => (
  {
    model,
    data,
  }
)

export async function POST(req: Request) {
  const data: PostRequestBody<IComment> = await req.json();
  return await genericPOST(postParams(data));
}

export async function GET(req: Request) {
  return genericGetAll(model);
}
