import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/SDTP-Practice/',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [react()],
});
