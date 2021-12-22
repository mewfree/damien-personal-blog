import Head from "next/head";
import Link from "next/link";
import { useTheme } from 'next-themes';

import Layout from "../components/layout";

export default function About() {
  const { theme, setTheme } = useTheme();

  return (
    <Layout>
      <Head>
        <title>About - Damien Gonot</title>
        <meta name="description" content="About Damien Gonot" />
        <meta
          name="keywords"
          content="damien, gonot, damien gonot, about, linkedin, github, contact"
        />
      </Head>
      <div className="text-3xl font-bold text-center">About</div>
      <div className="text-2xl font-bold mt-4">Contact</div>
      <div className="pl-4">
        <div>📩 Where you can email me: damien.gonot@gmail.com</div>
        <div>
          🖇 Where we can connect:{" "}
          <Link href="https://www.linkedin.com/in/damiengonot">
            <a className="font-semibold">
              https://www.linkedin.com/in/damiengonot
            </a>
          </Link>
        </div>
        <div>
          🧑‍💻 Where you can see my code:{" "}
          <Link href="https://github.com/mewfree">
            <a className="font-semibold">
              https://github.com/mewfree
            </a>
          </Link>
        </div>
      </div>
      <div className="text-2xl font-bold mt-4">Personal Stack</div>
      <div className="pl-4">
        <div className="text-xl font-bold">Hardware</div>
        <div>💻 What my main machine is: MacBook Pro 14-inch</div>
        <div>⌨️ What I type on: HHKB Pro 2</div>
        <div>🖱 What I use to point to things: Roccat Kone XTD</div>
        <div className="text-xl font-bold mt-4">Software</div>
        <div>✍️ How I program: Emacs (with evil-mode)</div>
        <div>🧠 How I organize most stuff: org-mode</div>
        <div>🧑‍🌾 How I run shell commands: kitty + tmux + zsh</div>
      </div>
      <div className="text-2xl font-bold mt-4">Open Source</div>
      <div className="pl-4">
        <div>This website is open source!</div>
        <div>
          <Link href="https://github.com/mewfree/damien-personal-blog">
            <a className="font-semibold">
              👀 You can look at its source code here
            </a>
          </Link>
        </div>
      </div>
      <button type="button" className="rounded bg-indigo-200 hover:bg-indigo-400 text-indigo-800 dark:bg-indigo-800 dark:hover:bg-indigo-600 dark:text-white font-bold p-2 mt-4" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle {theme === 'dark' ? 'light' : 'dark'} mode
      </button>
      <div className="text-3xl font-bold mt-4">λ</div>
    </Layout>
  );
}
