import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://voltbird-site.pages.dev/",
    title: "VoltBird | Sanjay S",
    description: "Wassup! Check this out.",
    author: "Sanjay S",
    profile: "https://voltbird-site.pages.dev/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: ,
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/satnaing/astro-paper/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/voltbird" },
    { name: "x",        url:  },
    { name: "linkedin", url:  },
    { name: "mail",     url: "mailto:sanjays@tuta.io" },
  ],
  shareLinks: [
    { name: "whatsapp", url:  },
    { name: "facebook", url:  },
    { name: "x",        url:  },
    { name: "telegram", url:  },
    { name: "pinterest", url:  },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
