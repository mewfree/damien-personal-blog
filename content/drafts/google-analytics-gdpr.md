---
title: "Make Your Google Analytics Setup GDPR-compliant in Under 2 Minutes"
date: 2020-07-28
tags: ["google", "analytics", "compliance", "gdpr"]
---

For legal reasons, this is not legal advice.
## Introduction
Hey there. I hope you're all doing okay.

I've always kept my tracking setup on this blog very minimal. Google Analytics is the only third-party script/tracker that I allow myself to use. I could use [Simple Analytics](https://simpleanalytics.com/) or [Netlify Analytics](https://www.netlify.com/products/analytics/) but they're both paid solutions and since this blog is a hobby project I'd like to keep the cost minimal.

One thing that has been bothering me is that by default, Google uses cookies to track users across multiple visits or "sessions" (and across the web...).

An additional consequence is that it makes my blog not GDPR-compliant since I do not ask for user consent for "statistics cookies". I don't want to add an ugly cookie banner that annoys everybody.

So let's see if it's possible for Google Analytics not to use any cookies... (spoiler: it's possible and it's really easy)

## How? Tell me!
### ga.js
If your Google Analytics doesn't set up any cookie, then you don't have to show a cookie consent banner...
[Insert smart image]

### Google Tag Manager (GTM)
Go ahead to Google Tag Manager, select your account.

You should see this:
![Select Analytics in GTM](/images/gtm_analytics.png)

Edit Analytics settings by clicking on the card and set field name `storeGac` to value `false`
![Setting storeGac to false](/images/gtm_storeGac.png)

As you can see, no cookies are set on new visits to [damiengonot.com](https://www.damiengonot.com).
![No More Cookies](/images/no_more_cookies.png)

## Any drawbacks?
You won't be able to measure recurring visitors.

## Conclusion
This works if you want an easy solution to not having to show a cookie consent screen/banner to some visitors while still keeping 99% of Google Analytics features.

Do not hesitate to [contact me](/about) with any questions about the article.
