import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://sotszk.github.io",
  author: "Suzuki Sota",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "SUZUKI SOTA's RESUME",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = {
  lang: "ja", // html lang code. Set this empty and default will be "en"
  langTag: ["ja-JP"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/sotszk",
    linkTitle: `${SITE.author}'s Github account`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:sotasuzuki.dev@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: false,
  },
];
