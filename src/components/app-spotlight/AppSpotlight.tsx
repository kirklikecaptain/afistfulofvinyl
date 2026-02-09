'use client';

import { Spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export type AppSpotlightResultProps = {
  title: string;
  subtitle?: string;
  href: string;
  accentColor: string;
  uploadDate?: string;
};

export type AppSpotlightProps = {
  artists: AppSpotlightResultProps[];
  videos: AppSpotlightResultProps[];
};

export function AppSpotlight({ artists, videos }: AppSpotlightProps) {
  const router = useRouter();

  const [query, setQuery] = useState('');

  const isSearching = query.length > 0;

  const defaultActions = [
    { id: 'home', label: 'Home', onClick: () => router.push('/') },
    { id: 'artists', label: 'All Artists', onClick: () => router.push('/artists') },
    { id: 'videos', label: 'All Videos', onClick: () => router.push('/videos') },
  ];

  const searchData = [
    {
      group: 'Pages',
      actions: defaultActions,
    },
    {
      group: 'Artists',
      actions: isSearching
        ? artists.map((artist) => ({ id: artist.href, label: artist.title }))
        : [],
    },
    {
      group: 'Videos',
      actions: isSearching ? videos.map((video) => ({ id: video.href, label: video.title })) : [],
    },
  ];

  return (
    <Spotlight
      centered
      query={query}
      onQueryChange={(query) => setQuery(query)}
      scrollable={isSearching}
      actions={isSearching ? searchData : defaultActions}
      nothingFound="Nothing found..."
      searchProps={{
        leftSection: <IconSearch size={20} stroke={1.5} />,
        placeholder: 'Search by artist or video title...',
      }}
    />
  );
}
