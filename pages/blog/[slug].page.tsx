import { fetchData } from "../../lib/sanity/utils";
import {
  articleBySlugQuery,
  blogQuery,
} from "../../lib/sanity/queries/blogQueries";
import BlogWrapper from "./BlogWrapper";
import { portableTextMap } from "../../components/portableTextComponents/portableTextMap";
import { PortableText } from "@portabletext/react";
import { TypedObject } from "@portabletext/types";
import { blogH1 } from "./blog.css";

interface BlogProps {
  title: string;
  body: TypedObject[];
}

export default function BlogPage({ title, body }: BlogProps) {
  return (
    <BlogWrapper>
      <h1 className={blogH1}>{title}</h1>
      <PortableText value={body} components={portableTextMap} />
    </BlogWrapper>
  );
}

export async function getStaticPaths() {
  const paths = await fetchData(blogQuery);

  return {
    paths: paths.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pageSlug = params?.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const article = await fetchData(articleBySlugQuery, { slug: pageSlug });

  const { title, body } = article;

  return {
    props: {
      title,
      body,
    },
  };
}
