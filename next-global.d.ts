declare module "react" {
  // Allow custom properties in style objects
  interface CSSProperties {
    [varName: `--${string}`]: string | number | undefined;
  }
}

export {};
