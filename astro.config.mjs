import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  site: 'https://buildy.necrozmalabs.com',
  base: '',
  integrations: [
    starlight({
      
    head: [
      // Adding google analytics
      {
        tag: 'script',
        attrs: {
          type: 'text/javascript',
        },  
        content: `
        (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "pzsuxdjtkc");
        `,
      },
      {
        tag: 'link',
        attrs: {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css'
        }
      }      
    ],

      title: 'Build Y',
      logo: {
        src: './src/assets/logo.png'
      },
      social: {
        github: 'https://github.com/Necrozmalabs/buildY',
        twitter: 'https://x.com/buildY_HQ',
        linkedin: 'https://www.linkedin.com/company/build-y'
      },
      sidebar: [
        {
          label: '[home] Home',
          link: '/'
        },
        {
          label: '[box] Find here',
          autogenerate: {
            directory: 'tags'
          }
        },
        {
          label: '[book] Usage License',
          link:'/usagelicense/'
        },
        {
          label: '[rocket] Credits',
          link:'/credits/'
        },
        {
          label: '[list] Updates',
          link:'/updates/'
        },
        {
          label: '[hand] Story we stand for',
          link:'/story-we-stand-for/'
        },
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
