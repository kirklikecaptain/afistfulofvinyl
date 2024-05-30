import { Container, Heading, Section } from "@radix-ui/themes";

export type HeroProps = {
  heading: string;
};

export function Hero(props: HeroProps) {
  const { heading } = props;

  return (
    <Section px="4">
      <Container>
        <Heading size="8">{heading}</Heading>
      </Container>
    </Section>
  );
}
