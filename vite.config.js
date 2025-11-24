import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // ❌ remove process.env exposure
  define: {},

  server: {
    port: 3000,
    open: true,
  },

  // ensures public folder content (including _redirects) is copied to dist
  publicDir: 'public',
})



