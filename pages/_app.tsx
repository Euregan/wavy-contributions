import type { AppProps } from "next/app";
import "../styles/reset.css";
import Page from "../ui/Page";

const App = ({ Component, pageProps }: AppProps) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

export default App;
