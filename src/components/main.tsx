import classnames from "classnames";

export type MainProps = {
  artistColor?: string | null;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export function Main(props: MainProps) {
  const { className, artistColor, style, children } = props;

  const mergedStyles = { ...style, ...(artistColor && { "--artist-color": artistColor }) };

  return (
    <main className={classnames(className, { "artist-theme": Boolean(artistColor) })} style={mergedStyles}>
      {children}
    </main>
  );
}
