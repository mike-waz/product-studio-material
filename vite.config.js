import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Map 'design_system' imports to the installed 'design-system' package
      'design_system': 'design-system',
    },
  },
})
