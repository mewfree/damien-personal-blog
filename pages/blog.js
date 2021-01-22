import Head from "next/head";
import Link from "next/link";

import fs from "fs";
import matter from "gray-matter";

import Layout from "../components/layout";

export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Blog - Damien Gonot</title>
      </Head>
      <div className="text-3xl font-bold">
        All blog articles
      </div>
      <div className="pl-4">
        {posts.sort((p1, p2) => new Date(p2.date) - new Date(p1.date)).map(({ frontmatter: { title, description, date }, slug }) => (
          <article key={slug}>
            <header>
              <h3 className="mb-0 mt-4">
                <Link href={"/blog/[slug]"} as={`/blog/${slug}`}>
                  <a className="text-2xl font-semibold text-indigo-600 no-underline">
                    {title}
                  </a>
                </Link>
              </h3>
              <span className="mb-6">written on {date}</span>
            </header>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    const options = { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" };
    const formattedDate = data.date.toLocaleDateString("en-US", options);

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace(".md", ""),
      date: data.date.toISOString(),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
