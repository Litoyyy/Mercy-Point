// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
      '~/assets/styles/main.css',
  ],

  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: `
                      @import "@/assets/styles/base/kit.scss";
                      @import "@/assets/styles/base/mixins.scss";
                      @import "@/assets/styles/containers/media.scss";
                  `,
              },
          },
      },
  },

  modules: ["nuxt-swiper"],
})