import { createClient, cacheExchange, fetchExchange } from '@urql/core';

const contentfulApi = process.env.NEXT_PUBLIC_CONTENTFUL_API_URL!;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!;
const previewToken = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN!;

export type ServerClientOptions = NextFetchRequestConfig & {
  preview?: boolean;
};

export function createServerClient(options: ServerClientOptions = {}) {
  const { preview, tags = ['contentful'], revalidate = 60 } = options;

  const getFetch: typeof fetch = (input, init = {}) => {
    const revalidateInterval = preview ? 0 : revalidate;

    return fetch(input, {
      ...init,
      next: {
        tags,
        revalidate: revalidateInterval,
      },
    });
  };

  const getFetchOptions = () => {
    const token = preview ? previewToken : accessToken;

    return {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
  };

  return createClient({
    url: contentfulApi,
    requestPolicy: preview ? 'network-only' : 'cache-first',
    exchanges: [cacheExchange, fetchExchange],
    fetch: getFetch,
    fetchOptions: getFetchOptions,
  });
}
