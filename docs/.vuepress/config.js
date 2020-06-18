module.exports = {
  title: "Jibran Kalia",
  description: 'Just playing around',
  plugins: [
    [ '@vuepress/search', { searchMaxSuggestions: 10 }, ],
    [ '@vuepress/search', { hostname: 'https://jibrankalia.com' } ]
  ],
  dest: 'public',
  evergreen: true,
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "msapplication-config", content: "/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
    ['script', { async: true, "data-goatcounter": "https://jibrankalia.goatcounter.com/count", src: "//gc.zgo.at/count.js" }],
  ],
  themeConfig: {
    repo: 'JibranKalia/personal-website-v4',
    lastUpdated: 'Last Modified',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    nav: [
      // Normal Links
      { text: 'Blog', link: '/blog/' },
      { text: 'Wiki', link: '/wiki/' },
      { text: 'Today I Learned', link: '/today-I-learned/' },
    ]
  }
}

