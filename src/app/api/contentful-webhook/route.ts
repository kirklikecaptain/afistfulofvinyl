import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

type ContentfulSys = {
  id: string;
  contentType?: {
    sys: {
      id: string;
    };
  };
};

type ContentfulFields = {
  slug?: { 'en-US'?: string } | string;
  artistSlug?: { 'en-US'?: string } | string;
  videoSlug?: { 'en-US'?: string } | string;
};

type ContentfulWebhookBody = {
  sys?: ContentfulSys;
  fields?: ContentfulFields;
};

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

function extractFieldSlug(value: ContentfulFields[keyof ContentfulFields]): string | null {
  if (!value) return null;
  if (typeof value === 'string') return value;
  if (typeof value['en-US'] === 'string') return value['en-US']!;
  return null;
}

function computeTagsToRevalidate(body: ContentfulWebhookBody): string[] {
  const tags = new Set<string>();

  const contentTypeId = body.sys?.contentType?.sys.id;
  const fields = body.fields ?? {};

  const entrySlug = extractFieldSlug(fields.slug);
  const artistSlug = extractFieldSlug(fields.artistSlug) ?? entrySlug;
  const videoSlug = extractFieldSlug(fields.videoSlug);

  if (!contentTypeId) {
    // When in doubt, invalidate broad, global tags.
    tags.add('root-layout-document');
    tags.add('home-page-data');
    tags.add('artists-list-page');
    return Array.from(tags);
  }

  switch (contentTypeId) {
    case 'artist': {
      if (artistSlug) {
        tags.add(`artist-${artistSlug}`);
      }
      // Artist list and layout likely depend on artists.
      tags.add('artists-list-page');
      tags.add('root-layout-document');
      break;
    }
    case 'video': {
      if (artistSlug && videoSlug) {
        tags.add(`artist-${artistSlug}-${videoSlug}`);
      }
      // Recent videos and layout may reference videos.
      tags.add('home-page-data');
      tags.add('root-layout-document');
      break;
    }
    default: {
      // Fallback for other types: invalidate global data.
      tags.add('root-layout-document');
      tags.add('home-page-data');
      break;
    }
  }

  return Array.from(tags);
}

export async function POST(req: NextRequest) {
  try {
    const secret = getEnv('CONTENTFUL_WEBHOOK_SECRET');
    const provided = req.headers.get('x-contentful-secret');

    if (!provided || provided !== secret) {
      return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
    }

    const body = (await req.json()) as ContentfulWebhookBody;
    const tags = computeTagsToRevalidate(body);

    for (const tag of tags) {
      revalidateTag(tag, 'page');
    }

    return NextResponse.json({ ok: true, revalidatedTags: tags });
  } catch (error) {
    console.error('[contentful-webhook] Error handling webhook', error);
    return NextResponse.json(
      { ok: false, error: (error as Error).message ?? 'Unknown error' },
      { status: 500 }
    );
  }
}
