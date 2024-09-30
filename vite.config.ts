import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This allows Vite to listen on all available network interfaces (public IP).
    port: 5174, // The port number you want to run the app on.
  },
})
