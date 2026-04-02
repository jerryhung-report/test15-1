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
      title: 'CMoneyFund投資人格測驗',
      meta: [
        { name: 'description', content: '準備好探索你的投資人格了嗎？15 題揭曉你的「口袋家族萌寵」，獲取專屬投資清單，讓萌寵帶你開啟投資第一步！' },
        { property: 'og:title', content: 'CMoneyFund投資人格測驗' },
        { property: 'og:description', content: '準備好探索你的投資人格了嗎？15 題揭曉你的「口袋家族萌寵」，獲取專屬投資清單，讓萌寵帶你開啟投資第一步！' },
        { property: 'og:image', content: 'https://www.cmoneyfund.com.tw/api/v1.0/File/Download/e9cabd5a-7aed-4e43-a7a4-5dae1a969544' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'CMoneyFund投資人格測驗' },
        { name: 'twitter:description', content: '準備好探索你的投資人格了嗎？15 題揭曉你的「口袋家族萌寵」，獲取專屬投資清單，讓萌寵帶你開啟投資第一步！' },
        { name: 'twitter:image', content: 'https://www.cmoneyfund.com.tw/api/v1.0/File/Download/e9cabd5a-7aed-4e43-a7a4-5dae1a969544' }
      ]
    }
  }
})
