import "../styles/app.css";
import Layout from "../components/Layout";
import { Analytics } from "../web/Analytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
