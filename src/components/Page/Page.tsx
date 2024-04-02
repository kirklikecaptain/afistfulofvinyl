import { Stack } from "@mantine/core";

export type PageProps = {
  children: React.ReactNode;
};

export function Page({ children }: PageProps) {
  return (
    <Stack mih="100dvh" gap={0}>
      {children}
    </Stack>
  );
}
