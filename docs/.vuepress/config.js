module.exports = {
  title: "Jibran Kalia",
  description: 'Just playing around',
  plugins: [
    [ 'sitemap', { hostname: 'https://jibrankalia.com', changefreq: 'monthly' }],
    [ '@vuepress/search', { searchMaxSuggestions: 10 }, ],
    [ '@vuepress/search', { hostname: 'https://jibrankalia.com' } ],
    [ '@vuepress/google-analytics', { 'ga': 'UA-129311280-1' } ],
    [ '@limdongjin/vuepress-plugin-simple-seo', {
      root_url: 'https://jibrankalia.com',
      default_site_name: "Jibran Kalia's Blog",
      twitter_creator: "@jibrankalia"
    }]
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
    ['meta', { name: "google-site-verification", content: "NblPLmMB4wmuwbiu0rYCsNVusPrW6-zctI7owTYzOf0" } ]
  ],
  themeConfig: {
    repo: 'JibranKalia/personal-website-v4',
    lastUpdated: 'Last Modified',
    docsDir: 'docs',
    editLinks: false,
    nav: [
      // Normal Links
      { text: 'Blog', link: '/blog/' },
      { text: 'Wiki', link: '/wiki/' }
    ]
  }
}

