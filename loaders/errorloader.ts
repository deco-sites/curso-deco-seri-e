
import { LoaderGenericTypes } from "../loaders/types.ts";


export default function apiquotables(
  prop: unknown,
  _req: Request,
  _ctx: unknown,
): Promise<LoaderGenericTypes> {
  throw new Error("Ops... -- error from loader");

}
