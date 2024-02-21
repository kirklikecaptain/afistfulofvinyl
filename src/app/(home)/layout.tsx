import { App } from "~/templates";

export default function HomeLayout({ children }: React.PropsWithChildren) {
  return <App homePage>{children}</App>;
}
