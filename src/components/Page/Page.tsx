export type PageProps = {
  artistColor?: string;
  children: React.ReactNode;
};

export function Page({ artistColor, children }: PageProps) {
  const style = {
    "--artist-color": artistColor || "#d91111",
    "--artist-color-bright": "hsl(from var(--artist-color) h 85% 50%)",
    "--artist-color-light": "hsl(from var(--artist-color) h 60% 80%)",
    "--artist-color-dark": "hsl(from var(--artist-color) h 60% 20%)",
  } as React.CSSProperties;

  return <div style={style}>{children}</div>;
}
