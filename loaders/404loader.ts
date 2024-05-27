import { AppContext } from "site/apps/site.ts";


export interface Quotes {
  data: string[];
}

// {"_id":"jbHSeSpkyL5H","content":"Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.","author":"Franklin D. Roosevelt","tags":["Famous Quotes"],"authorSlug":"franklin-d-roosevelt","length":118,"dateAdded":"2021-04-23","dateModified":"2023-04-14"}
export default async function apiquotables(
  _prop: unknown,
  _req: Request,
  _ctx: AppContext,
): Promise<Quotes | null> {
  console.log(
    await _ctx.invoke["site"].loaders.errorquote({
      quantity: 1,
    }),
  );
  _ctx.response.status = 404;
  return Promise.resolve(null);
}
