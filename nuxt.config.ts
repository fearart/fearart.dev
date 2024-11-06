// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: true,
  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    'nuxt-mongoose'
  ],
  googleFonts:{
    families: {
      'DM Sans': true
    },
    download: true
  },
})