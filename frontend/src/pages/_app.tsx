import { Chakra } from "@/providers/chakra";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Chakra>
      <Component {...pageProps} />
    </Chakra>
  );
};

export default App;
