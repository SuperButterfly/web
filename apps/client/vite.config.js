import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => {
  return {
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
    build: {
      outDir: 'build',
    },
    plugins: [react()],
    server:{
        port:3000
    }
  };
});