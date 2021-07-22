import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import Job from "../components/job";
import Study from "../components/study";

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Résumé - Damien Gonot</title>
        <meta name="description" content="Damien Gonot's résumé" />
        <meta name="keywords" content="damien, gonot, damien gonot, résumé, cv, pdf" />
      </Head>
      <div className="text-3xl font-bold text-center">
        Résumé
      </div>
      <div className="pl-4 mt-4">
        <div className="text-center mb-4">
          <Link href="/damiengonot_resume.pdf">
            <a className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 hover:text-black dark:hover:text-indigo-200">
              Download as a PDF
            </a>
          </Link>
        </div>
        <div><span className="font-semibold">Current location:</span> Montréal, QC, Canada</div>
        <div><span className="font-semibold">Current role:</span> Software Engineer at Wealthsimple</div>
        <div className="text-2xl font-bold mt-4">
          Summary
        </div>
        <div>I&apos;m a software developer specializing in automating marketing strategies and reporting.</div>
        <div className="text-2xl font-bold mt-4">
          Experience
        </div>
        <div id="list-of-experiences" className="flex flex-col gap-y-4">
          <Job
            dateFrom="Mar. 2021"
            dateTo="Now"
            title="Software Engineer - Growth"
            companyName="Wealthsimple"
            companyDescription="Financial services"
            companyLocation="Remote, Canada"
            items={["Working on an internal Ruby on Rails service to scale creatives throughput and advertising spend."]}
          />
          <Job
            dateFrom="Jul. 2020"
            dateTo="Now"
            title="Marketing Consultant"
            companyName="Damien Gonot"
            companyDescription="Sole proprietorship"
            companyLocation="Montreal, QC"
            items={[
              "Helped a Y Combinator company scale their Google Ads by leveraging Google Ads Scripts.",
              "Other projects around data reporting, automated Facebook Ads campaigns creation...",
            ]}
          />
          <Job
            dateFrom="Feb. 2017"
            dateTo="Sept. 2020"
            title="User Acquisition Manager"
            companyName="Hopper"
            companyDescription="Flights & hotels booking app"
            companyLocation="Montreal, QC"
            items={[
              "Created the Hopper Ads Engine, a collection of Python scripts automatically generating, optimizing and reporting Hopper’s user acquisition strategy.",
              "Integrated our internal inventory of flights & hotels prices with the ad platforms’ API (Facebook, Snap, Twitter, TikTok…) to generate thousands of daily refreshed creatives.",
              "Optimized our overall acquisition campaigns to continuously reach our target payback period and LTV/CAC target ratio.",
              "Reported spend & performance by automatically pulling reports from ad platforms and our Mobile Measurement Platform (AppsFlyer) to BigQuery and Google Spreadsheets.",
              "Other projects around email marketing, notifications, text-to-speech for video creatives..."
            ]}
          />
          <Job
            dateFrom="Sept. 2016"
            dateTo="Feb. 2017"
            title="Campaigns Manager"
            companyName="Konversion"
            companyDescription="SEM/SEO agency now part of Accenture"
            companyLocation="Montreal, QC"
            items={["Managed the digital marketing strategy of multiple clients (insurance, real estate, retail…), including one of the largest Google Ads account in Canada in terms of budget, with a total annual budget of over $15M across accounts."]}
          />
          <Job
            dateFrom="May 2015"
            dateTo="Sept. 2016"
            title="Customer Acquisition Associate"
            companyName="Busbud"
            companyDescription="Intercity bus tickets website"
            companyLocation="Montreal, QC"
            items={[
              "Managed Google Ads and Bing Ads accounts: 8 languages, 1,000,000+ keywords, 50,000,000+ yearly impressions, 3,500,000+ annual clicks with a positive direct ROAS (last click).",
              "Switched our Google Ads scripts setup to a Google Ads API (with a Python wrapper) setup to have more control on the campaign creation and updates. Built an in-house remarketing setup to replace Criteo.",
              "On-page SEO, SEO content, interlinking, use of a crawler & log analysis tool (ELK stack).",
              "Created the Dollar Bus Club (alerts on $1 bus tickets on Twitter and by emails) and Busvsplane.com (Bus vs Plane comparison website, including Uber pricings to/from bus station/airport) as side-projects."
            ]}
          />
        </div>
        <div className="text-2xl font-bold mt-4">
          Education
        </div>
        <div id="list-of-education" className="flex flex-col gap-y-4">
          <Study
            dateFrom="2014"
            dateTo="2015"
            universityName="National Chengchi University"
            collegeName="College of Commerce"
            title="Exchange Student"
            universityLocation="Taipei, Taiwan"
          />
          <Study
            dateFrom="2013"
            dateTo="2014"
            universityName="Concordia University"
            collegeName="John Molson School of Business"
            title="Visiting Student"
            universityLocation="Montreal, Quebec"
          />
          <Study
            dateFrom="2011"
            dateTo="2015"
            universityName="Kedge Business School"
            collegeName="International BBA (Bachelor in Business Administration)"
            title="Full-time Student"
            universityLocation="Marseille, France"
          />
        </div>
        <div className="text-2xl font-bold mt-4">
          Skills & Interests
        </div>
        <div className="bg-indigo-100 dark:bg-indigo-800 rounded-md p-2">
          <ul className="list-disc list-inside">
            <li>
              Google Ads (including Google Ads Scripts & Google Ads API), Facebook Ads (including Facebook Marketing API), Twitter Ads, Snap Ads, Apple Search Ads, TikTok Ads
            </li>
            <li>
              Python, Ruby, Node.js, PostgreSQL, Redis
            </li>
            <li>
              Interests in Functional Programming: Elixir, Clojure, Racket
            </li>
            <li>
              Data Science: Pandas & NumPy libraries for Python, Julia, R
            </li>
            <li>
              Tools: OS X, Linux, Emacs, Zsh + Tmux + (Neo)Vim, LaTeX
            </li>
            <li>
              Last trip: Hong Kong & Seoul (Summer 2019)
            </li>
          </ul>
        </div>
        <div className="text-2xl font-bold mt-4">
          Languages
        </div>
        <div className="bg-indigo-100 dark:bg-indigo-800 rounded-md p-2">
          <ul className="list-disc list-inside">
            <li>
              French (native)
            </li>
            <li>
              English (bilingual)
            </li>
            <li>
              Mandarin Chinese (beginner)
            </li>
          </ul>
        </div>
      </div>
      <div className="text-3xl font-bold mt-4">
        λ
      </div>
    </Layout>
  );
}
