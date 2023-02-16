import { link, p, section } from "../styles/about.css";
import Link from "next/link";

export default function About() {
  return (
    <section className={section}>
      <h1>Hello</h1>
      <div className={p}>
        <p>I'm Cole.</p>
        <p>
          I am a fullstack software engineer, but I mainly write frontend code.
        </p>
        <p>
          If you'd like to hire me, you can find a copy of my resume{" "}
          <Link className={link} href="">
            here
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
