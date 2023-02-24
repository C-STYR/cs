import Link from "next/link";
import { navLink, navItem, mainNav, navContainer } from "./styles.css";
export default function Navbar() {
  return (
    <div className={navContainer}>
      <div className={mainNav}>
        <NavLink href="/" dest="home" />
        <NavLink href="/blog" dest="blog" />
        <NavLink href="/about" dest="about" />
      </div>
    </div>
  );
}
interface NavLinkProps {
  href: string;
  dest: string;
}
function NavLink({ href, dest }: NavLinkProps) {
  return (
    <div className={navItem}>
      <Link className={navLink} href={href}>
        {dest}
      </Link>
    </div>
  );
}
