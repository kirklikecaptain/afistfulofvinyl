import { AppLayout } from "~/components";

export default function PagesLayout({ children }: React.PropsWithChildren) {
  return <AppLayout>{children}</AppLayout>;
}
