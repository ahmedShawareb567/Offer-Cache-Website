// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap",
        },
      ],
      title: "عرض و نقد",
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/eslint",
    "@nuxtjs/svg-sprite",
    "@nuxtjs/i18n",
    "nuxt-swiper",
    "nuxt-rating",
    undefined,
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  eslint: {
    config: {
      standalone: false,
    },
    checker: true,
  },
  svgSprite: {
    input: "~/assets/icons/svg",
    output: "~/assets/icons/sprite",
  },
  i18n: {
    lazy: false,
    langDir: "./langs",
    strategy: "prefix_except_default",
    defaultLocale: "ar",
    detectBrowserLanguage: false,
    locales: [
      {
        code: "ar",
        name: "Arabic",
        dir: "rtl",
        file: "ar.json",
      },
      {
        code: "en",
        name: "English",
        dir: "ltr",
        file: "en.json",
      },
    ],
    vueI18n: "./i18n.config.ts",
  },
});