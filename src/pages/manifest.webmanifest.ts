import type { APIRoute } from 'astro'

import { SITE_NAME, THEME_COLOR } from '@/lib/constants'

const manifest = {
   name: SITE_NAME,
   short_name: SITE_NAME,
   lang: 'it',
   display: 'standalone',
   theme_color: THEME_COLOR,
   background_color: 'white',
   icons: [
      {
         src: '/icon-192.png',
         type: 'image/png',
         sizes: '192x192',
         purpose: 'any maskable',
      },
      {
         src: '/icon-512.png',
         type: 'image/png',
         sizes: '512x512',
         purpose: 'any maskable',
      },
   ],
   cacheDigest: null,
}

export const GET: APIRoute = () => {
   return new Response(JSON.stringify(manifest), {
      headers: {
         'Content-Type': 'application/json',
      },
   })
}
