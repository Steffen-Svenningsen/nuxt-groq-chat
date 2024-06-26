// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    preset: 'vercel-edge', // you can use 'vercel' or other providers here
  },
  runtimeConfig: {
    openaiApiKey: process.env.NUXT_GROQ_API_KEY,
  },
});
