import { defineConfig } from 'astro/config'

import cloudflare from '@astrojs/cloudflare'

import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'

import { SITE_URL_DEV, SITE_URL } from './src/lib/constants'

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
   vite: {
      css: {
         transformer: 'lightningcss',
         lightningcss: {
            targets: browserslistToTargets(browserslist('>= 0.25%')),
         },
      },
      build: {
         cssMinify: 'lightningcss',
      },
   },
})
