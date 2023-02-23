import Head from "./Head";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
    <Head/>
    <Navbar/>
      <main>{children}</main>
    </>
  );
}
