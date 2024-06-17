// Extend to allow CSS custom properties in style objects
declare module "react" {
  interface CSSProperties {
    [varName: `--${string}`]: string | number | undefined;
  }
}

export {};
