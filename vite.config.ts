import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Si publicas en GitHub Pages como /nombre-del-repo/, cambia esto a '/nombre-del-repo/'
  base: '/',
})
