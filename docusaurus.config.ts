import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpenApparatus',
  tagline: 'Reproducible procedural environments for behavioural research',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://openapparatus.github.io',
  baseUrl: '/docs/',

  organizationName: 'OpenApparatus',
  projectName: 'docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/OpenApparatus/docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'OpenApparatus',
      logo: {
        alt: 'OpenApparatus logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'core/overview',
          position: 'left',
          label: 'Core',
        },
        {
          type: 'doc',
          docId: 'studio/overview',
          position: 'left',
          label: 'Studio',
        },
        {
          type: 'doc',
          docId: 'unity/overview',
          position: 'left',
          label: 'Unity',
        },
        {
          type: 'doc',
          docId: 'design-system/overview',
          position: 'left',
          label: 'Design',
        },
        {
          href: 'https://github.com/OpenApparatus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Introduction', to: '/'},
            {label: 'Getting started', to: '/getting-started'},
            {label: 'Core', to: '/core/overview'},
            {label: 'Studio', to: '/studio/overview'},
            {label: 'Unity', to: '/unity/overview'},
            {label: 'Design system', to: '/design-system/overview'},
          ],
        },
        {
          title: 'Repositories',
          items: [
            {label: 'OpenApparatus/core', href: 'https://github.com/OpenApparatus/core'},
            {label: 'OpenApparatus/studio', href: 'https://github.com/OpenApparatus/studio'},
            {label: 'OpenApparatus/unity', href: 'https://github.com/OpenApparatus/unity'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub organization', href: 'https://github.com/OpenApparatus'},
            {label: 'Contributing', to: '/contributing'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenApparatus contributors. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'json', 'bash', 'powershell'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
