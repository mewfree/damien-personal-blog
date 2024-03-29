import React from "react";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import behead from "remark-behead";
import SyntaxHighlighter from "react-syntax-highlighter";

import Layout from "../../components/layout";
import MailchimpForm from "../../components/MailchimpForm";

export default function Post({ content, excerpt, frontmatter }) {
  return (
    <Layout>
      <Head>
        <title>{frontmatter.title} - Damien Gonot</title>
        <meta name="description" content={excerpt} />
        <meta name="keywords" content={frontmatter.tags.toString()} />
        <meta name="og:title" content={`${frontmatter.title} - Damien Gonot`} />
        <meta name="og:description" content={excerpt} />
      </Head>
      <div className="mt-4 mb-10">
        <h1 className="text-3xl font-bold text-center">{frontmatter.title}</h1>
        <div className="text-center">written on {frontmatter.date}</div>
      </div>
      <article className="prose prose-indigo dark:prose-dark max-w-none">
        <ReactMarkdown
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <SyntaxHighlighter
                  language="javascript"
                  PreTag="span"
                  customStyle={{
                    display: undefined,
                    padding: undefined,
                  }}
                  wrapLongLines={true}
                  {...props}
                >
                  {children}
                </SyntaxHighlighter>
              )
            }
          }}
          remarkPlugins={[[behead, {depth: 1}]]}>
          {content}
        </ReactMarkdown>
      </article>
      <footer className="mt-48">
        <div className="text-center"><MailchimpForm /></div>
        <div className="mb-4">
          <Link href="/blog">
            <a className="font-semibold">
              {"<< Go back to all articles"}
            </a>
          </Link>
        </div>
        <div className="text-center">{frontmatter.tags.map(tag => <span className="text-xs bg-gray-200 dark:bg-indigo-100 text-black rounded mx-2 p-1" key={tag}>{tag}</span>)}</div>
        <div className="text-center mt-4">Damien Gonot, {frontmatter.year}</div>
      </footer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("content/posts").filter(file => file.endsWith(".md"));

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
  const year = data.date.getFullYear();

  const frontmatter = {
    ...data,
    date: formattedDate,
    year: data.date.getFullYear(),
  };

  return {
    props: {
      content: `${content}`,
      excerpt: `${content.substring(0, 297)}...`,
      frontmatter,
    },
  };
}
