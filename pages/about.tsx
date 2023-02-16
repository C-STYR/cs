import { link, p, pinkWords, section } from "../styles/about.css";
import Link from "next/link";

export default function About() {
  return (
    <section className={section}>
      <h1>Hello</h1>
      <div className={p}>
        <p>
          I ocassionally post to this{" "}
          <Link href="/blog" className={link}>
            web log
          </Link>
          , usually on topics that don't have a great presence on the interwebs
          already, and almost exclusively on software engineering.
        </p>
        <p>
          If you're interested in{" "}
          <span className={pinkWords}>wooden boat building</span>, you can find
          some pictures{" "}
          <Link
            className={link}
            href="https://flickr.com/photos/colestyron/albums/"
          >
            here
          </Link>
          .
        </p>
        <p>
          This site was built with <span className={pinkWords}>Next.js</span>{" "}
          and <span className={pinkWords}>vanilla-extract CSS</span>. The source
          code can be found{" "}
          <Link className={link} href="https://github.com/c-styr/cs">
            here
          </Link>
          .
        </p>
        <p>
          If you'd like to hire me, you can find a copy of my resume{" "}
          <Link className={link} href="">
            here
          </Link>
          . It's <i>probably</i> not the most recent version.
        </p>
      </div>
    </section>
  );
}
