import Link from "next/link";
import { blogBase, linkBase } from "./blog.css"

export default function Blog() {
  return (
    <div className={ blogBase }>
      <Link className={linkBase} href="/blog/example1">1</Link>
      <Link className={linkBase} href="/blog/example2">2</Link>
    </div>
  );
}