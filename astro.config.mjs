import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://buildY.necrozmalabs.com',
  base: '',
  integrations: [
    starlight({
      title: 'Build Y',
      logo: {
        src: './src/assets/logo.png'
      },
      social: {
        github: 'https://github.com/louisescher/starlight-ion-theme',
        twitter: 'https://x.com/Necrozmalabs'
      },
      sidebar: [
        {
          label: '[home] Home',
          link: '/'
        },
        // {
        //   label: '[list] Features',
        //   link: '/features/'
        // },
        {
          label: '[box] Find here',
          autogenerate: {
            directory: 'tags'
          }
        },
        {
          label: '[book] Reference',
          autogenerate: {
            directory: 'reference'
          }
        }
      ],
      components: {
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        SiteTitle: './src/components/SiteTitle.astro',
        Card: './src/components/Card.astro',
        Sidebar: './src/components/Sidebar.astro',
        Pagination: './src/components/Pagination.astro',
        Hero: './src/components/Hero.astro',
        Head: './src/components/Head.astro',
        PageTitle: './src/components/PageTitle.astro'
      },
      customCss: [
        '@fontsource-variable/space-grotesk/index.css',
        '@fontsource/space-mono/400.css',
        '@fontsource/space-mono/700.css',
        './src/styles/theme.css'
      ],
      expressiveCode: {
        themes: ['github-dark']
      },
      pagination: false,
      lastUpdated: true
    }),
    react() // Adding React integration
  ],
  output: "static"
});
