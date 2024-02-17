import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET({ url }: Request) {
  const { searchParams } = new URL(url);

  if (searchParams.get("key") !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response("Invalid key", { status: 401 });
  }

  draftMode().enable();
  redirect(searchParams.get("redirect") || "/");
}
