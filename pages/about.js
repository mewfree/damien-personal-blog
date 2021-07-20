import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";

export default function About() {
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
            <a className="font-semibold text-indigo-600 no-underline hover:text-black">
              https://www.linkedin.com/in/damiengonot
            </a>
          </Link>
        </div>
        <div>
          🧑‍💻 Where you can see my code:{" "}
          <Link href="https://github.com/mewfree">
            <a className="font-semibold text-indigo-600 no-underline hover:text-black">
              https://github.com/mewfree
            </a>
          </Link>
        </div>
      </div>
      <div className="text-2xl font-bold mt-4">Personal Stack</div>
      <div className="pl-4">
        <div className="text-xl font-bold">Hardware</div>
        <div>💻 What my main machine is: MacBook Pro 13-inch</div>
        <div>⌨️ What I type on: HHKB Pro 2 (Planck EZ soon 🙏)</div>
        <div>🖱 What I use to point to things: Roccat Kone XTD</div>
        <div className="text-xl font-bold mt-4">Software</div>
        <div>✍️ How I program: Emacs (using evil-mode)</div>
        <div>
          🧠 How I organize most stuff: org-mode + org-roam + org-journal
        </div>
        <div>🧑‍🌾 How I run shell commands: kitty + tmux + zsh</div>
      </div>
      <div className="text-3xl font-bold mt-4">λ</div>
    </Layout>
  );
}
