import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'scholarGate Docs',
    tagline: 'Multi-tenant School Management Platform',
    favicon: 'img/favicon.ico',

    future: { v4: true },

    url: 'https://your-domain.com',
    baseUrl: '/',

    organizationName: 'LETSGO-Automation',
    projectName: 'scholarGate-docs',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es', 'pt'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.ts'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        navbar: {
            title: 'scholarGate',
            logo: {
                alt: 'scholarGate Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'docsSidebar',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    href: 'https://github.com/orgs/LETSGO-CONSULTING/repositories',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Documentation',
                    items: [
                        {label: 'Introduction', to: '/docs/introduction'},
                        {label: 'Architecture', to: '/docs/architecture/architecture-overview'},
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {label: 'GitHub', href: 'https://github.com/LETSGO-Automation'},
                    ],
                },
            ],
            copyright: `© ${new Date().getFullYear()} scholarGate.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
