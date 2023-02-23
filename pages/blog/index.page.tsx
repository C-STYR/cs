import Link from "next/link";
import { getAllBlogIndexablePosts } from "../../lib/sanity/queries/blogQueries";
import { fetchData } from "../../lib/sanity/utils";
import { blogBase, linkBase } from "./blog.css";

export default function Blog({ results }) {
  return (
    <div className={blogBase}>
      {results.map((post) => {
        let slug = "/blog/" + post.slug;
        return (
          <Link key={post.slug} className={linkBase} href={slug}>
            {post.title}
          </Link>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const results = await fetchData(getAllBlogIndexablePosts);

  return {
    props: { results },
  };
}
