export type PageProps = {
  artistColor?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export function Page(props: PageProps) {
  const { className = "", artistColor, children, style } = props;

  const mergedClasses = `${className} ${artistColor ? "artist-theme" : ""}`.trim();
  const mergedStyles = { ...style, ...(artistColor && { "--artist-color": artistColor }) };

  return (
    <main className={mergedClasses} style={mergedStyles}>
      {children}
    </main>
  );
}
