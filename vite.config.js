import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/nyc-guide-2026/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['images/*.webp', 'qr/*.png'],
      manifest: {
        name: 'NYC Family Guide 2026',
        short_name: 'NYC 2026',
        description: 'Privater Familien-Reiseguide für New York',
        theme_color: '#071a35',
        background_color: '#f4f6f9',
        display: 'standalone',
        start_url: '/nyc-guide-2026/',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
        ]
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,png,webp,svg,json}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*\.tile\.openstreetmap\.org\//,
            handler: 'CacheFirst',
            options: { cacheName: 'osm-tiles', expiration: { maxEntries: 250, maxAgeSeconds: 60*60*24*30 } }
          },
          {
            urlPattern: /^https:\/\/api\.open-meteo\.com\//,
            handler: 'NetworkFirst',
            options: { cacheName: 'weather', networkTimeoutSeconds: 3, expiration: { maxEntries: 10, maxAgeSeconds: 60*60 } }
          }
        ]
      }
    })
  ]
})
