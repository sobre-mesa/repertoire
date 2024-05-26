import prisma from "@/lib/prisma";
import { GenericPOSTParams, genericGetAll, genericPOST } from "../../utils/prismaUtils";
import { IArtist } from "@/types/IArtist";
import { PostRequestBody } from "@/types/PostRequestBody";

const model = prisma.artist;
const postParams  = (data: PostRequestBody<IArtist>) : GenericPOSTParams => (
  {
    model,
    data,
    validationField: "name",
  }
)

export async function POST(req: Request) {
  const data: PostRequestBody<IArtist> = await req.json();
  return await genericPOST(postParams(data));
}

export async function GET(req: Request) {
  return genericGetAll(model);
}
