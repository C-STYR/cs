import { useState } from "react";
import { btn, link, body, p, pinkWords, section } from "./about.css";
import Link from "next/link";
import ContactBox from "../../components/ContactBox";

export default function About() {
  const [showEmail, setShowEmail] = useState(false);

  function handleClick() {
    setShowEmail(true);
    setTimeout(() => {
      setShowEmail(false);
    }, 9000);
  }

  return (
    <>
      <section className={section}>
        <h1 className={p}>Hello</h1>
        <div className={body}>
          <p className={p}>
            I'm Cole, a software engineer and wooden boat builder.
          </p>
          <p className={p}>
            I ocassionally post to this{" "}
            <Link href="/blog" className={link}>
              web log
            </Link>
            {" "}on challenges I've encountered in software engineering - and how I solved them.
          </p>
          <p className={p}>
            If you're interested in{" "}
            <span className={pinkWords}>wooden boat building</span>, you can
            find some pictures{" "}
            <Link
              className={link}
              href="https://flickr.com/photos/colestyron/albums/"
            >
              here
            </Link>
            .
          </p>
          <p className={p}>
            This site was built with <span className={pinkWords}>Next.js</span>{" "}
            and <span className={pinkWords}>vanilla-extract CSS</span>. The
            source code can be found{" "}
            <Link className={link} href="https://github.com/c-styr/cs">
              here
            </Link>
            .
          </p>
          <p className={p}>
            If you'd like to contact me, click{" "}
            <button type="button" className={btn} onClick={handleClick}>
              here
            </button>
            .
          </p>
        </div>
      </section>
      {showEmail && <ContactBox />}
    </>
  );
}
