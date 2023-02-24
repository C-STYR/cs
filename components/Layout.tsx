import Head from "./Head";
import Navbar from "./Navbar";
import Centrator from "./Centrator";

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Centrator>
        <Navbar />
      </Centrator>
      <main>{children}</main>
    </>
  );
}
