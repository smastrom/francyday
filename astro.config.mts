import { defineConfig } from 'astro/config'

import cloudflare from '@astrojs/cloudflare'

import { SITE_URL, SITE_URL_DEV } from './src/lib/constants'

export default defineConfig({
   site: import.meta.env.DEV ? SITE_URL_DEV : SITE_URL,
   output: 'server',
   adapter: cloudflare({
      platformProxy: {
         enabled: true,
      },
   }),
   devToolbar: {
      enabled: false,
   },
})
