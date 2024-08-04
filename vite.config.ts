import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom', // Use jsdom to simulate a browser environment
    globals: true, // Enable global APIs like describe, it, expect, etc.
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'], // Include test files
  },
})
