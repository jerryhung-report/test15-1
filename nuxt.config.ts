// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      // Public keys if needed
    },
    geminiApiKey: process.env.GEMINI_API_KEY || process.env.API_KEY || ''
  },
  build: {
    transpile: ['lucide-vue-next']
  },
  vite: {
    ssr: {
      noExternal: ['lucide-vue-next']
    },
    optimizeDeps: {
      exclude: ['lucide-vue-next']
    },
    server: {
      hmr: {
        protocol: 'wss',
        clientPort: 443,
        path: 'hmr/'
      }
    }
  },
  app: {
    head: {
      title: '基金平台人格測驗',
      meta: [
        { name: 'description', content: '準備好探索你的基金人格了嗎？15題測驗，完成後即可立刻獲得你的投資風格定位分析報告與基金推薦！' },
        { property: 'og:title', content: '基金平台人格測驗' },
        { property: 'og:description', content: '準備好探索你的基金人格了嗎？15題測驗，完成後即可立刻獲得你的投資風格定位分析報告與基金推薦！' },
        { property: 'og:image', content: 'https://www.cmoneyfund.com.tw/api/v1.0/File/Download/c76bc90c-f17b-4398-9a52-289738c40038' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '基金平台人格測驗' },
        { name: 'twitter:description', content: '準備好探索你的基金人格了嗎？15題測驗，完成後即可立刻獲得你的投資風格定位分析報告與基金推薦！' },
        { name: 'twitter:image', content: 'https://www.cmoneyfund.com.tw/api/v1.0/File/Download/c76bc90c-f17b-4398-9a52-289738c40038' }
      ]
    }
  }
})
