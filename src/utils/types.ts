export interface WithChildren {
  children: React.ReactNode;
}

export type Without<T, K extends PropertyKey> = {
  [P in Extract<keyof T, K>]?: never;
};

export type XOR<A extends object, B extends object> =
  | (A & Without<B, keyof A>)
  | (B & Without<A, keyof B>);
