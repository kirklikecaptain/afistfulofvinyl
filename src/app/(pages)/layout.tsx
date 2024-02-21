import { App } from "~/templates";

export default function PagesLayout({ children }: React.PropsWithChildren) {
  return <App>{children}</App>;
}
