import { Container, Section } from "@radix-ui/themes";

export function AppFooter() {
  return (
    <Section asChild style={{ background: "var(--gray-3)" }}>
      <footer>
        <Container>Footer</Container>
      </footer>
    </Section>
  );
}
