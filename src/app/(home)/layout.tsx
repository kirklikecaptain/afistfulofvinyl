import { AppLayout } from "~/components";

export default function HomeLayout({ children }: React.PropsWithChildren) {
  return <AppLayout isHomePage>{children}</AppLayout>;
}
