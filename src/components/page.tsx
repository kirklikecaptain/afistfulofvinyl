import classNames from "classnames";

export type PageProps = {
  artistColor?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export function Page(props: PageProps) {
  const { className, artistColor, children, style } = props;

  const mergedStyles = { ...style, ...(artistColor && { "--artist-color": artistColor }) };

  return (
    <main className={classNames(className, { "artist-theme": artistColor })} style={mergedStyles}>
      {children}
    </main>
  );
}
