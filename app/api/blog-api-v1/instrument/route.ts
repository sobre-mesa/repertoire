import prisma from "@/lib/prisma";
import { GenericPOSTParams, genericGetAll, genericPOST } from "../../utils/prismaUtils";
import { IInstrument } from "@/types/IInstrument";
import { PostRequestBody } from "@/types/PostRequestBody";

const model = prisma.instrument;
const postParams  = (data: PostRequestBody<IInstrument>) : GenericPOSTParams => (
  {
    model,
    data,
    validationField: "name",
  }
)

export async function POST(req: Request) {
  const data: PostRequestBody<IInstrument> = await req.json();
  return await genericPOST(postParams(data));
}

export async function GET(req: Request) {
  return genericGetAll(model);
}
