import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/campaign-crud-react/',
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
