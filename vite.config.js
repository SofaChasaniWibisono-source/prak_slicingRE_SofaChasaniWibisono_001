import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/prak_slicingRE_SofaChasaniWibisono_001/',
  plugins: [react(), 
    tailwindcss()],
})
