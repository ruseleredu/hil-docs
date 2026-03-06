import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import footer from "./footer"; // No need for .ts extension here
import navbarItems from "./navbar"; // Import your new navbar file

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Typhonn HIL Docs',
  tagline: 'Hardware-in-the-Loop simulation with HIL402 Device.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://ruseleredu.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/hil-docs/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ruseleredu", // Usually your GitHub org/user name.
  projectName: "hil-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'warn', // Options: 'ignore', 'log', 'warn', 'throw'

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Include the KaTeX CSS in your config under stylesheets:
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.28/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Wsr4Nh3yrvMf2KCebJchRJoVo1gTU6kcP05uRSh5NV3sj9+a8IomuJoQzf3sMq4T",
      crossorigin: "anonymous",
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ruseleredu/hil-docs/edit/main/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ruseleredu/hil-docs/edit/main/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "hil", // Unique ID for this docs instance
        path: "hil", // Path to your API docs folder
        routeBasePath: "hil", // Base URL for these docs (e.g., yoursite.com/api/...)
        sidebarPath: require.resolve("./hilsidebars.ts"), // Separate sidebar for API docs
        // 👇 Add this line for the last update time
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        // ... other options specific to your API docs
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/card_hil_text.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'HIL Docs',
      logo: {
        alt: 'Hardware-in-the-Loop simulation solutions.',
        src: 'img/logo_hil.svg',
      },
      items: navbarItems, // Drop the imported array here
    },
    footer: footer, // Use the imported object
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "autohotkey",
        "arduino",
        "apacheconf",
        "nginx",
        "bash",
        "matlab",
        "powershell",
        "ini",
        "latex",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
