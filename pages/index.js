import Link from "next/link";

import fs from "fs";
import matter from "gray-matter";

import Layout from "../components/layout";

export default function Home({ posts }) {
  return (
    <Layout>
      <div className="intro mb-8">
        <div className="text-3xl font-bold">
          Introduction
        </div>
        <div className="pl-4 mt-4">
          Hi, I'm Damien.
        </div>
      </div>
      <div className="text-3xl font-bold">
        Recent blog articles
      </div>
      <div className="pl-4">
        {posts.map(({ frontmatter: { title, description, date }, slug }) => (
          <article key={slug}>
            <header>
              <h3 className="mb-0 mt-4">
                <Link href={"/blog/[slug]"} as={`/blog/${slug}`}>
                  <a className="text-2xl font-semibold text-indigo-600 no-underline hover:text-black">
                    {title}
                  </a>
                </Link>
              </h3>
              <span className="mb-6">written on {date}</span>
            </header>
          </article>
        ))}
      </div>
    <div className="pl-4 mt-6">
      <Link href="/blog">
        <a className="text-2xl font-semibold text-indigo-600 no-underline hover:text-black">
          See all articles
        </a>
      </Link>
    </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const allPosts = files.map((filename) => {
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

  const posts = allPosts.sort((p1, p2) => new Date(p2.date) - new Date(p1.date)).slice(0, 5);

  return {
    props: {
      posts,
    },
  };
}
