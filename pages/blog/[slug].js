import React from "react";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";

import Layout from "../../components/layout";

const InlineCode = ({ language, value }) => {
  return <SyntaxHighlighter language={language} PreTag="span">{value}</SyntaxHighlighter>;
};

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export default function Post({ content, frontmatter }) {
  return (
    <Layout>
      <Head>
        <title>{frontmatter.title} - Damien Gonot</title>
      </Head>
      <div className="mb-8">
        <div className="mb-4">
          <Link href="/blog">
            <a className="font-semibold text-indigo-600 no-underline hover:text-black">
              {"<< Go back to all articles"}
            </a>
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center">{frontmatter.title}</h1>
        <div className="text-center">written on {frontmatter.date}</div>
      </div>
      <article className="prose prose-sm prose-indigo max-w-none">
        <ReactMarkdown
          escapeHtml={false}
          source={content}
          renderers={{ inlineCode: InlineCode, code: CodeBlock }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("content/posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
   const markdownWithMetadata = fs
    .readFileSync(path.join("content/posts", slug + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  // Convert post date to format: Month day, Year
  const options = { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" };
  const formattedDate = data.date.toLocaleDateString("en-US", options);

  const frontmatter = {
    ...data,
    date: formattedDate,
  };

  return {
    props: {
      content: `${content}`,
      frontmatter,
    },
  };
}
