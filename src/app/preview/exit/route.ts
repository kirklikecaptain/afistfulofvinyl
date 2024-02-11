import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET({ url }: Request) {
  const { searchParams } = new URL(url);

  draftMode().disable();
  redirect(searchParams.get("redirect") || "/");
}
