export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
  ],

  css: ['~/assets/css/main.css'],

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
    storageKey: 'tyagita-color-mode',
  },

  site: {
    url: 'https://tyagitalrst.com',
    name: 'Tyagita Larasati',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  fonts: {
    families: [
      { name: 'Syne', provider: 'google', weights: [700, 800] },
      { name: 'DM Sans', provider: 'google', weights: [300, 400, 500] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500] },
    ],
  },

  nitro: {
    output: {
      publicDir: 'dist',
    },
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
