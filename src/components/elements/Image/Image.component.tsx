'use client';

import NextImage, { type ImageProps as NextImageProps } from 'next/image';
import { Image as MantineImage, type ImageProps as MantineImageProps } from '@mantine/core';

import { loader } from './Image.utils';
export type ImageProps = NextImageProps & MantineImageProps;

export function Image(props: ImageProps) {
  const { src, alt = '', loading = 'eager', ...imageProps } = props;

  return (
    <MantineImage
      component={NextImage}
      src={src}
      alt={alt}
      loading={loading}
      loader={loader}
      {...imageProps}
    />
  );
}
