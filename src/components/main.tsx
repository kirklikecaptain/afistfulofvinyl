import classNames from "classnames";

export type MainProps = {
  artistColor?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export function Main(props: MainProps) {
  const { className, artistColor, style, children } = props;

  const mergedStyles = { ...style, ...(artistColor && { "--artist-color": artistColor }) };

  return (
    <main className={classNames(className, { "artist-theme": artistColor })} style={mergedStyles}>
      {children}
    </main>
  );
}
