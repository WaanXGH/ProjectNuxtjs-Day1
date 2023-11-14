// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet", href:
            "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        }
      ],
    }
  },




  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt", "@pinia/nuxt"],


  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },

  pwa: {
    manifest: {
      name: "najwanExProject",
      short_name: "najwan",
      theme_color: "#000000",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "images/desain96x96px.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "images/desain128x128px.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "images/desain144x144px.png",
          sizes: "144x144",
          type: "image/png"
        },
      ]
    },
    devOptions: {
      enabled: true,
    }
  },
  appConfig: {
    apikey: process.env.SUPABASE_API_KEYS,
    baseUrl: process.env.SUPABASE_URL,
    secretKey: process.env.SUPABASE_SECRETS_KEY,
    storageUrl: process.env.SUPABASE_STORAGE_URL,
    baseStorageUrl: process.env.SUPABASE_GET_STORAGE_URL,
  },
})
