export interface PageProps {
  children: React.ReactNode;
}

export function Page({ children }: PageProps) {
  return <main>{children}</main>;
}
