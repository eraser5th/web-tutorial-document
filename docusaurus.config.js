// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Webチュートリアル",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  url: "https://eraser5th.github.io",
  baseUrl: "/web-tutorial-document/",

  organizationName: "eraser5th", // Usually your GitHub org/user name.
  projectName: "web-tutorial-document", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/eraser5th/web-tutorial-document",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      ({
        hashed: true,
        language: ["en", "ja"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Webチュートリアル",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "aizuHackSidebar",
            position: "left",
            label: "AizuHack",
          },
          {
            type: "docSidebar",
            sidebarId: "practicalProgrammingSidebar",
            position: "left",
            label: "実践的プログラミング",
          },
          {
            href: "https://github.com/eraser5th/web-tutorial-document",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} @eraser5th. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
