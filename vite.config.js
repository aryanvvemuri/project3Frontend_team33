import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external access
    port: process.env.PORT || 5173, // Use Render's assigned port
    strictPort: true, // Ensure the port is strictly used
    allowedHosts: ['project3frontend-team33.onrender.com'], // ✅ Add your Render host here
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
    allowedHosts: ['project3frontend-team33.onrender.com'],
  },
});
