import { Box, Flex } from "@radix-ui/themes";

import { getAllArtists } from "~/libs/contentful";

export async function ArtistStrip() {
  const artists = await getAllArtists();

  return (
    <Flex>
      {artists.map((artist) => (
        <Box
          key={artist.sys.id}
          style={{ flex: 1, height: "2px", background: artist.fields.accentColor || "black" }}
        />
      ))}
    </Flex>
  );
}
