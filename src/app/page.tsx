import { Heading } from "@radix-ui/themes";

import { ColorModeToggle } from "~/components/elements/color-mode-toggle";

export default function HomePage() {
  return (
    <main>
      <Heading as="h1">A Fistful of Vinyl</Heading>
      <div>
        <ColorModeToggle />
      </div>
    </main>
  );
}
