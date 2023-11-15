import NextImage, { type ImageProps as NextImageProps } from "next/image";

interface ImageProps extends NextImageProps {}

export function Image(props: ImageProps) {
  return <NextImage {...props} />;
}
